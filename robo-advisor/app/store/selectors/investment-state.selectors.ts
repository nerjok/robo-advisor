import type { RootState } from "../store";


export const selectedValues = (state: RootState) => ({
  perYearInvestment: state.investmentReducer.perYearInvestment,
  years: parseInt(state.investmentReducer.years),
  riskLevel: state.investmentReducer.riskLevel,
  selectedRegions: state.investmentReducer.selectedRegions,
  assetClasses: state.investmentReducer.assetClasses,
});
export const selectPerYearInvestment = (state: RootState) => state.investmentReducer.perYearInvestment
export const selectYears = (state: RootState) => state.investmentReducer.years
export const selectedRiskLevel = (state: RootState) => state.investmentReducer.riskLevel;
export const selectedRegions = (state: RootState) => state.investmentReducer.selectedRegions as Record<string, boolean>;
export const selectedAssetClass = (state: RootState) => state.investmentReducer.assetClasses;