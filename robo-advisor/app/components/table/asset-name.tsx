import { AssetClass } from "~/models/asset-class-model";

// }) => {
export const AssetName = (data: any) => {
  const { icon, title, code } = data.asset;
  const assetClass = data.assetType;

  const etfIconClass = "bg-blue-50 text-primary";
  const bondsIconClass = "bg-emerald-50 text-emerald-600";
  const indexIconClass = "bg-red-50 text-error";

  const iconClass =
    assetClass === AssetClass.ETFs
      ? etfIconClass
      : assetClass === AssetClass.GovBonds
        ? bondsIconClass
        : indexIconClass;

  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${iconClass}`}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>

      <div>
        <div className="text-sm font-bold text-on-surface">{title}</div>
        <div className="text-[10px] text-on-surface-variant font-medium">
          {code}
        </div>
      </div>
    </div>
  );
};
