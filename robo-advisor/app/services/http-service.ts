import type { InvestmentAsset, UserPreferences } from "~/models/investment-results";

// import process from "process";

// const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default function isDev(): boolean
{
    return false;
}

export class HttpService {
  public static baseUrlProd = "http://82.70.52.40"
  public static baseUrl: string = "http://127.0.0.1:8000";

  static fetchProposals(preferences: UserPreferences): Promise<InvestmentAsset[]> {
    return fetch(`${isDev() ? this.baseUrl : this.baseUrlProd}/portfolio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching proposals:", error);
        throw error;
      });
  }
}
