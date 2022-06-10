import { CSSProperties, ReactNode } from 'react';
import { TableCellProps } from '@mui/material';

import { SortStates } from './constants';

export type CellValue = string | number | boolean | Date | undefined | object;

export type SortState = `${SortStates}`;

export type RenderCell<Data> = (params: Data) => ReactNode;

export type DataGridRow = Record<string, any>;

export type DataGridSort<SortField> = {
  fieldId: SortField;
  sort: SortState;
};

export type DataGridProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  rows: Data[];
  columns: DataGridColumns<Data>[];
  keyId: keyof DataGridRow;
  onRowClick?: (row: Data) => void;
  selectedRows?: Array<Data>;
  onSelectRow?: (row: Data[]) => void;
  sorting?: DataGridSort<SortField>[];
  onSort: (sorting: DataGridSort<SortField>[]) => void;
  Footer?: ReactNode;
  maxHeight?: number;
  loading?: boolean;
  // используется для отображения переданного кол-ва строк при отсутствии данных
  minDisplayRows?: number;
};

export type DataGridColumns<Data extends {}> = {
  field?: keyof Data;
  label?: string;
  sortable?: boolean;
  pointer?: boolean;
  renderCell?: RenderCell<Data>;
  format?: (data: Data) => CellValue;
  align?: TableCellProps['align'];
  width?: CSSProperties['width'];
};
