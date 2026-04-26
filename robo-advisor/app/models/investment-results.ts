import type { AssetClass } from "~/models/asset-class-model";
import type { RiskLevel } from "./risk.level";
import type { Regions } from "./regions";

export interface UserPreferences {
  assetClasses: AssetClass;
  perYearInvestment: number;
  riskLevel: RiskLevel;
  selectedRegions: Regions;
  years: number;
}

export interface InvestmentAsset {
  code: string;
  name: string;
  allocation: number;
  region: string;
  type: AssetClass;
  yield: number;
  ticker: string;
}
