import React from "react";

export default function InfoCard({title, value, cardClass = ''}: {title: string, value: string | number, cardClass?: string}) {
  return (
    <>
  {/* <div className="p-4 rounded-lg bg-background-light dark:bg-slate-800 border border-primary/5 sm:col-span-2"> */}
      <div className={`p-4 rounded-lg bg-background-light dark:bg-slate-800 border border-primary/5 ${cardClass}`}>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
          {title}
        </p>
        <p className="text-lg font-bold">
          {value}
        </p>
      </div>
    </>
  );
}
