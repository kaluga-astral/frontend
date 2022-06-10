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

export type DataGridColumns<Data extends {}> = {
  field?: keyof Data;
  label?: string;
  sortable?: boolean;
  pointer?: boolean;
  renderCell?: RenderCell<Data>;
  format?: (data: Data) => CellValue;
  align?: TableCellProps['align'];
  width?: CSSProperties['width'];
  emptyCellValue?: ReactNode;
};
