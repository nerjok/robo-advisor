interface PlanItemProps {
  planName?: string;
  totalInvestment: number;
  growthRate: number;
}

export default function PlanItem({
  planName = "Conservative",
  totalInvestment,
  growthRate,
}: PlanItemProps) {
  return (
    <>
      {/* <div className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
          {planName}
        </p>
        <p className="text-lg font-black text-primary">€{totalInvestment}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-green-500 font-bold">+{growthRate.toFixed(1)}%</p>
        <p className="text-xs text-slate-400">Est. Growth</p>
      </div>
    </div> */}

      <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
          {planName}
        </p>
        <p className="text-lg font-black text-primaryX">€{totalInvestment}</p>
        <div className="text-right">
          <p className="text-xs text-green-500 font-bold">
            +{growthRate.toFixed(1)}%
          </p>
          <p className="text-xs text-slate-400">Est. Growth</p>
        </div>
      </div>
    </>
  );
}
