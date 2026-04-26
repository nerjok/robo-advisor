import { AssetClass } from "~/models/asset-class-model";
import { RiskLevel } from "~/models/risk.level";
import { CellBadge } from "./cell-badge";
import { AssetType } from "./asset-type";
import { AssetName } from "./asset-name";
import type { TableRow, TableSettings } from "./model";
import type { InvestmentAsset } from "~/models/investment-results";

export const tableSettings: TableSettings = {
  columns: [
    {
      key: "asset",
      label: "asset_name",
      cellClass: "flex items-center gap-3",
      component: AssetName,
    },
    {
      key: "isin",
      label: "isin_code",
      cellClass: "font-mono text-[11px] text-on-surface-variant",
    },
    {
      key: "risk",
      label: "risk",
      headerClass: "text-center",
      cellClass: "flex justify-center",
      component: CellBadge,
    },
    {
      key: "region",
      label: "region",
      cellClass: "text-xs font-semibold text-on-surface",
    },
    {
      key: "yield",
      label: "avg_yield",
      headerClass: "text-right",
      cellClass: "text-right font-black text-on-surface",
    },
    {
      key: "assetType",
      label: "asset_type",
      headerClass: "text-right",
      cellClass: "flex justify-end",
      component: AssetType,
    },
  ],
  rows: [
    {
      asset: {
        title: "Vanguard S&P 500",
        code: "VOO.IV",
        icon: "account_balance",
      },
      isin: "US9229087690",
      risk: RiskLevel.Medium,
      region: "North America",
      yield: "1.54%",
      assetType: AssetClass.ETFs,
    },
    {
      asset: {
        title: "Treasury Bond 2030",
        code: "gt10:gov",
        icon: "paid",
      },
      isin: "gt10:gov",
      risk: RiskLevel.Low,
      region: "North America",
      yield: "1.54%",
      assetType: AssetClass.GovBonds,
    },
    {
      asset: {
        title: "IShares msci World",
        code: "swda.Lon",
        icon: "globe",
      },
      isin: "US9229087690",
      risk: RiskLevel.High,
      region: "North America",
      yield: "1.54%",
      assetType: AssetClass.Both,
    },
    {
      asset: {
        title: "Stoxx Europe 600",
        code: "exsaa:Fra",
        icon: "euro",
      },
      isin: "US9229087690",
      risk: RiskLevel.High,
      region: "North America",
      yield: "1.54%",
      assetType: AssetClass.ETFs,
    },
  ],
};

export const mapInvestmentAssetsToTable = (
  result: InvestmentAsset[],
): TableSettings => {
  const tableRows: TableRow[] = [];
  const rows = result.map((asset) => {
    return {
      asset: {
        title: asset.name,
        icon:
          asset.type === AssetClass.ETFs
            ? "account_balance"
            : asset.type === AssetClass.GovBonds
              ? "paid"
              : "euro",
        code: asset.ticker ?? "",
      },
      isin: asset.code,
      risk: RiskLevel.Medium,
      yield: asset.yield,
      assetType: asset.type,
      region: asset.region,
    };
  });

  return { columns: tableSettings.columns, rows };
};
