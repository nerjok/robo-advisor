import pandas as pd

def yearly_price_increase(hist: pd.DataFrame) -> pd.DataFrame:
    """
    Calculate yearly price increase (absolute and percentage) from ETF or stock history.
    
    Parameters:
    -----------
    hist : pd.DataFrame
        DataFrame returned by etf.history() or similar,
        must have a DatetimeIndex and a 'Close' column.
    
    Returns:
    --------
    pd.DataFrame
        Yearly summary with columns:
        'first', 'last', 'increase', 'pct_increase'
    """
    # Ensure the index is datetime
    hist = hist.copy()
    hist.index = pd.to_datetime(hist.index)
    
    # Resample by year-end
    yearly = hist["Close"].resample("YE").agg(["first", "last"])
    
    # Calculate absolute and percentage increase
    yearly["increase"] = yearly["last"] - yearly["first"]
    yearly["pct_increase"] = (yearly["last"] - yearly["first"]) / yearly["first"] * 100
    


    # Clean up index
    # yearly = add_multi_year_performance(yearly)
    perf = add_multi_year_performance(yearly)
    df = pd.concat([perf, yearly])
    df.index = df.index.astype(str)  # or .map(str)

    df.index.name = "Year"
    return df
    yearly.index = yearly.index.year
    yearly.index.name = "Year"

    return yearly

def add_multi_year_performance(yearly_df: pd.DataFrame, periods=(1, 3,5,10)):

    df = yearly_df.copy()
    recent_year = df.index.max()
    recent_price = df.loc[recent_year, "last"]

    nf = pd.DataFrame(columns=df.columns)

    for p in periods:
        year_then = recent_year - pd.DateOffset(years=p)
        if year_then in df.index:
            price_then = df.loc[year_then, "last"]
            abs_increase = recent_price - price_then
            pct_increase = (recent_price - price_then) / price_then * 100
            new_row = {
                "year": f"{p} year",
                "first": price_then,
                "last": recent_price,
                "increase": abs_increase,
                "pct_increase": pct_increase
            }
            nf = pd.concat([pd.DataFrame([new_row]), nf], ignore_index=True)
        else:
            print(f"Not enough history to calculate {p}-year performance.")
            continue
    nf = nf.set_index('year') 
    nf.index = nf.index.astype(str) 
    nf.index.name = "year"
    return nf

def multi_year_performance(yearly_df, periods=(3,5,10)):
    """
    Calculate multi-year performance from the most recent year.

    Parameters:
    -----------
    yearly_df : pd.DataFrame
        DataFrame with 'last' column (yearly last price)
        and index = Year (int)
    periods : tuple
        Number of years to calculate performance (e.g., 3,5,10)

    Returns:
    --------
    pd.DataFrame
        A DataFrame with columns:
        'Years Ago', 'Price Then', 'Price Now', 'Absolute Increase', '% Increase'
    """
    df = yearly_df.copy()
    recent_year = df.index.max()
    recent_price = df.loc[recent_year, "last"]

    results = []
    for p in periods:
        year_then = recent_year - pd.DateOffset(years=p)
        if year_then in df.index:
            price_then = df.loc[year_then, "last"]
            abs_increase = recent_price - price_then
            pct_increase = (recent_price - price_then) / price_then * 100
            results.append({
                "Years Ago": p,
                "Year Then": year_then,
                "Price Then": price_then,
                "Price Now": recent_price,
                "Absolute Increase": abs_increase,
                "% Increase": pct_increase
            })
        else:
            # Not enough history
            results.append({
                "Years Ago": p,
                "Year Then": year_then,
                "Price Then": None,
                "Price Now": recent_price,
                "Absolute Increase": None,
                "% Increase": None
            })
    
    return pd.DataFrame(results)