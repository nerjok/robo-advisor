import React from "react";
import { useTranslation } from "react-i18next";

export default function ProgressSection(
  settings = { sectionName: "Goals", step: 1, totalSteps: 4 },
) {
  const { t, i18n } = useTranslation();

  const percents = Math.round((settings.step / settings.totalSteps) * 100);
  return (
    <>
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex gap-6 justify-between items-end">
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">
              {/* Step 2 of 5 */}
              {settings.sectionName} {settings.step}/{settings.totalSteps}
            </p>
            {/* <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">
              What is your risk tolerance?
            </h1> */}
          </div>
          <p className="text-primary text-lg font-bold">{percents}% {t('completed')}</p>
        </div>
        <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${percents}%` }}
          ></div>
        </div>
        {/* <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          Select the profile that best matches your investment goals and comfort
          level with market changes.
        </p> */}
      </div>
    </>
  );
}
