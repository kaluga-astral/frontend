import { ReactNode } from 'react';

import { SortStates } from './constants';

export type CellValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | object;

export type SortState = `${SortStates}`;

export type RenderCell<T> = (params: T) => ReactNode;

export type DataGridRow = Record<string, any>;

export type DataGridSort<Data extends {}> = {
  fieldId: keyof Data;
  sort: SortState;
};

export type DataGridProps<T = DataGridRow> = {
  rows: T[];
  columns: DataGridColumns<T>[];
  keyId: keyof DataGridRow;
  selectedRows?: Array<T>;
  onSelectRow?: (row: T[]) => void;
  sorting?: DataGridSort<T>[];
  onSort: (sorting: DataGridSort<T>[]) => void;
  Footer?: ReactNode;
  maxHeight?: number;
  loading?: boolean;
};

export type DataGridColumns<Column extends {}> = {
  field: keyof Column & string;
  label?: string;
  sortable?: boolean;
  pointer?: boolean;
  renderCell?: RenderCell<Column>;
  format?: (data: Column) => CellValue;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};
