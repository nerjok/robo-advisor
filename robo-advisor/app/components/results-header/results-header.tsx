import React from "react";

export default function ResultsHeader({ title, description }: { title: string; description: string }) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          {/* <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
            <span>Investments</span>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-primary">Portfolio Strategy</span>
          </nav> */}

          <h1 className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
