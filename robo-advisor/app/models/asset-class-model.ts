import type { RadioButtonOptions } from "~/components/radio-group/model";

export enum AssetClass {
  ETFs = "ETF",
  GovBonds = "Gov Bonds",
  Both = "Both",
}

export const assetClasses = [
  { value: AssetClass.ETFs, label: "ETFs" },
  { value: AssetClass.GovBonds, label: "Gov Bonds" },
  { value: AssetClass.Both, label: "Both" },
] satisfies RadioButtonOptions<AssetClass>[];
