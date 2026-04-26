import React from "react";
import { useTranslation } from "react-i18next";

export default function TablePagination() {
  const { t, i18n } = useTranslation();
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <p className="text-xs text-slate-500 font-medium italic">
        {t('pagination_text')}
      </p>
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-500 font-bold">1 of 1 Pages</span>
        <div className="flex gap-1">
          <button className="p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-50 cursor-not-allowed">
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>
          <button className="p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
