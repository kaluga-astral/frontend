import { TableCellProps } from '@mui/material';
import { CSSProperties } from 'react';

import { DataGridRow, DataGridSort } from '../types';

export type DataGridHeadColumnProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  onSort: (field: SortField, sortable?: boolean) => void;
  sorting: DataGridSort<SortField>[];
  label?: string;
  sortable?: boolean;
  align?: TableCellProps['align'];
  field?: keyof Data;
  width?: CSSProperties['width'];
};
