import { ChangeEvent, ReactNode } from 'react';

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
  selectedRows?: Array<string>;
  onSelectRow?: (props: Array<string>) => void;
  sorting?: DataGridSort<T>[];
  onSort: (sorting: DataGridSort<T>[]) => void;
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
  page: number;
  totalCount: number;
  rowsPerPage?: number;
  maxHeight?: number;
  loading?: boolean;
};

export type DataGridColumns<Column extends {}> = {
  field: keyof Column & string;
  label?: string;
  sortable?: boolean;
  empty?: string | number;
  pointer?: boolean;
  onClick?: (data: Column) => void;
  renderCell?: RenderCell<Column>;
  format?: (data: Column) => CellValue;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};
