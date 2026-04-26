import { RiskLevel } from "~/models/risk.level";

export const CellBadge = ({ risk }: { risk: RiskLevel }) => {
  const mediumRiskClass = "bg-amber-50 text-amber-700 border-amber-200/50";
  const lowRiskClass = "bg-emerald-50 text-emerald-700 border-emerald-200/50";
  const hightRiskClass = "bg-red-50 text-error border-red-200/50";

  const riskClass =
    risk === RiskLevel.Low
      ? lowRiskClass
      : risk === RiskLevel.High
        ? hightRiskClass
        : mediumRiskClass;

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border capitalize ${riskClass}`}
    >
      {risk}
    </span>
  );
};