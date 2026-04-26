import type { ComponentType, JSX, ReactElement } from "react";

export interface TableRow {
  [index: string]: any;
}
export interface TableHeaderCell {
  key: string;
  label: string;
  headerClass?: string;
  cellClass?: string;
  component?: ComponentType<any>;
}
export interface TableSettings {
  columns: TableHeaderCell[];
  rows: TableRow[];
}
