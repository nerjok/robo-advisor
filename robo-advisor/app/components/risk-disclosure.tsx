import React from "react";
import { useTranslation } from "react-i18next";

export default function RiskDisclosure() {
    const { t, i18n } = useTranslation();
  return (
    <div className="mt-12 p-6 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
      <div className="flex justify-center mb-4 text-slate-400">
        <span className="material-symbols-outlined text-3xl">shield</span>
      </div>
      <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-2">
        {t('risk_disclosure_header')}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        {t('risk_disclosure_text1')}{" "}
        <a className="text-primary hover:underline" href="#">
          {t('full_disclosure')}
        </a>{" "}
        {t('risk_disclosure_text2')}
        
      </p>
      {/* <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-12 py-4 rounded-lg bg-primary text-white font-bold text-lg hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3">
                Confirm and Invest Now{" "}
                <span className="material-symbols-outlined">rocket_launch</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-300 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all">
                Adjust Risk Profile
              </button>
            </div> */}
    </div>
  );
}
