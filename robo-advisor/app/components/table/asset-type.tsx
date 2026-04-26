import { AssetClass } from "~/models/asset-class-model";

export const AssetType = ({ assetType }: { assetType: AssetClass }) => {
  const etfClass = "text-primary bg-primary/5 border-primary/10";
  const bondsClass = "text-emerald-600 bg-emerald-50 border-emerald-600/10";
  const equitiesClass = "text-error bg-red-50 border-error/10";
  const assetClass =
    assetType === AssetClass.ETFs
      ? etfClass
      : assetType === AssetClass.GovBonds
        ? bondsClass
        : equitiesClass;
  return (
    <span
      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${assetClass}`}
    >
      {assetType}
    </span>
  );
};