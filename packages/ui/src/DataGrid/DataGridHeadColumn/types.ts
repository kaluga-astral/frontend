import { TableCellProps } from '@mui/material';
import { CSSProperties } from 'react';

import { DataGridSort } from '../types';

export type DataGridHeadColumnProps<T> = {
  onSort: (field: keyof T, sortable: boolean | undefined) => () => void;
  sorting: DataGridSort<T>[];
  label?: string;
  sortable?: boolean;
  align?: TableCellProps['align'];
  field: keyof T;
  width?: CSSProperties['width'];
};
