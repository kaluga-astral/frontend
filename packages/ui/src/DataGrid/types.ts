import React, { ReactNode } from 'react';

export type RenderCell<T> = (params: T) => ReactNode;

export type Order = 'asc' | 'desc';

export type CellValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | object;

export interface DataGridColumns<Col extends {}> {
  field: (keyof Col & string) | '$action';
  label?: string;
  sortable?: boolean;
  empty?: string | number;
  pointer?: boolean;
  clickCallBack?: (data: Col) => void;
  renderCell?: RenderCell<Col>;
  format?: (data: Col) => CellValue;
}

export type DataGridRow = Record<string, any>;

export interface DataGridHeadProps<T = DataGridRow> {
  numSelected: number;
  rowSelected?: boolean;
  columns: DataGridColumns<T>[];
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

export interface DataGridProps<T = DataGridRow> {
  data: T[];
  columns: DataGridColumns<T>[];
  rowsPerPage?: number;
  keyId: keyof DataGridRow;
  selected?: string[];
  loading?: boolean;
  onRowClick?: (row: T) => void;
  onSelect?: (selected: string[]) => void;
}
