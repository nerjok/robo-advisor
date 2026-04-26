import React from "react";

function ReturnCard({
  title,
  icon,
  iconClass = "text-primary",
  children,
}: {
  title: string;
  icon: string;
  iconClass?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 ${iconClass} rounded-lg`}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {title}
          </p>
        </div>
        {children}
      </div>
    </>
  );
}

ReturnCard.ValueContent = ({
  value,
  additionalValue,
}: {
  value: string;
  additionalValue?: string;
}) => (
  <>
    <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
      {value}
    </p>
    <div className="mt-2 flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
      <span className="material-symbols-outlined text-xs">trending_up</span>
      <span>{additionalValue}</span>
    </div>
  </>
);

ReturnCard.RiskProfile = ({risk}: {risk: string}) => (
  <>
    <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
      {risk}
    </p>
    {/* <div className="mt-2 flex items-center gap-2">
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div className="bg-amber-500 h-full w-[70%]"></div>
      </div>
      <span className="text-xs font-bold text-slate-500">7/10</span>
    </div> */}
  </>
);

export default ReturnCard;
