import TableRow from "./table-row";
import type { TableSettings } from "./model";
import { useTranslation } from "react-i18next";

export default function Table({
  tableSettings,
}: {
  tableSettings: TableSettings;
}) {
  const { t, i18n } = useTranslation();

  const printPdf = () => window.print();
  return (
    <>
      <div className="bg-surface rounded-xl shadow-sm border border-primary/5 overflow-hidden">
        {/* Table header */}
        <div className="px-6 py-4 bg-surface-container flex items-center justify-between">
          <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">
              list_alt
            </span>
            {t("portfolio_assets")}
          </h3>
          <div className="flex gap-2">
            <button className="bg-white border border-outline-variant px-3 py-1 rounded-lg text-xs font-bold text-on-surface-variant hover:bg-slate-50 transition-colors">
              {t("export_csv")}
            </button>
            <button
              onClick={printPdf}
              className="bg-white border border-outline-variant px-3 py-1 rounded-lg text-xs font-bold text-on-surface-variant hover:bg-slate-50 transition-colors"
            >
              {t("print_pdf")}
            </button>
          </div>
        </div>
        {/* /header ends */}

        {/* Columns header */}
        <div className="hidden md:grid asset-grid-cols px-6 py-3 bg-surface-container/30 border-b border-primary/5 text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">
          {Object.values(tableSettings.columns).map((col) => (
            <div
              key={col.key}
              className={`text-[10px] font-bold uppercase text-on-surface-variant tracking-wider ${col.headerClass ?? ""}`}
            >
              {t(col.label)}
            </div>
          ))}
        </div>
        {/* /columns ends */}

        <div className="divide-y divide-primary/5">
          {tableSettings.rows.map((row, index) => (
            <TableRow
              key={`table-rows-${index}`}
              row={row}
              headers={tableSettings.columns}
            />
          ))}
        </div>
      </div>
    </>
  );
}
