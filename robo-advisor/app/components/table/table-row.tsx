import type { TableHeaderCell, TableRow } from "./model";

export default function TableRow({
  row,
  headers,
}: {
  row: TableRow;
  headers: TableHeaderCell[];
}) {
  return (
    <div className="asset-grid-cols px-6 py-4 hover:bg-surface-container/40 transition-all cursor-pointer group">
      {headers.map((header) => (
        <div key={header.key} className={`${header.cellClass ?? "flex items-center"}`}>
          {header.component ? (
            <header.component key={header.key} {...row} />
          ) : (
            row[header.key]
          )}
        </div>
      ))}
    </div>
  );
}
