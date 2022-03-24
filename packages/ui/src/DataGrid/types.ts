import React, { ReactNode } from 'react';

export type CellValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | object;

export type DataGridRow = Record<string, any>;

export interface DataGridColumns<Column extends {}> {
  field: keyof Column & string;
  label?: string;
  sortable?: boolean;
  empty?: string | number;
  pointer?: boolean;
  clickCallBack?: (data: Column) => void;
  renderCell?: RenderCell<Column>;
  format?: (data: Column) => CellValue;
}

export type DataGridProps<T = DataGridRow> = {
  columns: DataGridColumns<T>[];
  keyId: keyof DataGridRow;
  data: T[];
  selectedRows?: Array<string>;
  rowsPerPage?: number;
  onSelect?: (props: Array<string>) => void;
};

export type DataGridHeadProps<T = DataGridRow> = {
  columns: DataGridColumns<T>[];
  selectable: boolean;
  onSelectAllRows: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCount: number;
  totalCount: number;
};

export type DataGridBodyProps<T = DataGridRow> = {
  columns: DataGridColumns<T>[];
  keyId: keyof DataGridRow;
  selectable: boolean;
  selectedRows?: Array<string>;
  data: T[];
  onSelectRow: (
    rowId: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CellProps<T> = {
  row: T;
  cell: DataGridColumns<T>;
};

export type RenderCell<T> = (params: T) => ReactNode;
