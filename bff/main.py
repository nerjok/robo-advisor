import os

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5174",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,  # important!
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Load data once (important!) ----
# etf_df = pd.read_csv("../output/justetf_hist.csv")
etf_df = pd.read_csv("./justetf_hist.csv")
# bonds_df = pd.read_csv("../output/bonds.csv")
bonds_df =  pd.DataFrame({
    "name": ["US 10Y", "Germany 10Y"],
    "allocation": [5000, 5000],
    "yield": [2.5, 4.4],
    "code": ["usagov", "usa10yer"],
    "region": ["Usa", "Germany"]
})

# ---- Helper ----
def parse_percent(x):
    if pd.isna(x) or x == '-':
        return None
    return float(x.replace('%','').replace('+','')) / 100


# ---- Request model ----
class PortfolioRequest(BaseModel):
    assetClasses: str
    perYearInvestment: int
    riskLevel: str
    selectedRegions: dict
    years: int


# ---- Core logic ----
def build_portfolio(user):
    df = etf_df.copy()

    df['return_3y'] = df['3 year'].apply(parse_percent)
    df['volatility'] = df['Volatility'].apply(parse_percent)

    df = df.dropna(subset=['return_3y', 'volatility'])

    # annual return
    df['annual_return'] = (1 + df['return_3y']) ** (1/3) - 1

    # score
    df['score'] = df['annual_return'] / df['volatility']

    # risk filter
    if user.riskLevel == "low":
        df = df[df['volatility'] < 0.10]
    elif user.riskLevel == "medium":
        df = df[(df['volatility'] >= 0.10) & (df['volatility'] < 0.20)]
    else:
        df = df[df['volatility'] >= 0.20]

    # region filter
    if not user.selectedRegions.get("global"):
        if user.selectedRegions.get("us"):
            df = df[df['domicile_country'] == "USA"]

    # pick top
    df = df.sort_values(by='score', ascending=False).head(10)

    # total money
    numeric_string = str(user.years)
    years = int(numeric_string.replace("y", ""))
    total = user.perYearInvestment * years

    # split
    split = {
        "low":   (0.3, 0.7),
        "medium":(0.6, 0.4),
        "high":  (0.9, 0.1)
    }

    etf_ratio, bond_ratio = split[user.riskLevel]

    etf_budget = total * etf_ratio
    bond_budget = total * bond_ratio

    # weights
    total_score = df['score'].sum()

    if total_score == 0 or len(df) == 0:
        return {"error": "No ETFs match the selected criteria"}

    df['weight'] = df['score'] / total_score
    df['allocation'] = df['weight'] * etf_budget

    # build result
    result = []

    for _, row in df.iterrows():
        result.append({
            "type": "ETF",
            "name": row["name"],
            "ticker": row["ticker"],
            "allocation": round(row["allocation"], 2),
            "code": row["isin"],
            "yield": round(row["annual_return"] * 100, 2),
            "score": row["score"],
            # TODO add regon
            "region": "Global"
        })

    # bonds (simple)
    bond_allocation = bond_budget / len(bonds_df)

    for _, row in bonds_df.iterrows():
        result.append({
            "type": "Bond",
            "name": row["name"],
            "yield": row["yield"],
            "allocation": round(bond_allocation, 2),
            "code": row["code"],
            "region": row["region"]
        })

    return result


# ---- API endpoint ----
@app.post("/portfolio")
def get_portfolio(user: PortfolioRequest):
    return build_portfolio(user)


# Serve frontend app
BUILD_DIR = "client"
# app.mount("/", StaticFiles(directory=BUILD_DIR, html=True), name="static")

app.mount(
    "/assets",
    StaticFiles(directory=os.path.join(BUILD_DIR, "assets")),
    name="assets"
)

# 3. SPA fallback (CRITICAL)
@app.get("/{path:path}")
def spa(path: str):
    return FileResponse(os.path.join(BUILD_DIR, "index.html"))