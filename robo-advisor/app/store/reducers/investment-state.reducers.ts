import { createSlice } from "@reduxjs/toolkit";
import { AssetClass, assetClasses } from "~/models/asset-class-model";
import { PreferredRegions } from "~/models/regions";
import { RiskLevel } from "~/models/risk.level";

export const investmentState = createSlice({
  name: "investmentState",
  initialState: {
    perYearInvestment: 100,
    years: "3y",
    riskLevel: RiskLevel.Medium,
    assetClasses: AssetClass.Both,
    selectedRegions: {
      [PreferredRegions.Global]: true,
      [PreferredRegions.US]: false,
    },
  },
  reducers: {
    setPerYearInvestment: (state, action) => {
      state.perYearInvestment = action.payload;
    },
    setYears: (state, action) => {
      state.years = action.payload;
    },
    setRiskLevel: (state, action) => {
      state.riskLevel = action.payload;
    },
    setSelectedRegions: (state, action) => {
      state.selectedRegions = action.payload;
    },
    setSelectedAssetClass: (state, action) => {
      state.assetClasses = action.payload;
    },
  },
});

export const {
  setPerYearInvestment,
  setYears,
  setSelectedRegions,
  setSelectedAssetClass,
  setRiskLevel
} = investmentState.actions;

export default investmentState.reducer;
