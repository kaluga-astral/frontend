import { TableCellProps } from '@mui/material';

import { DataGridSort, RenderCell } from '../types';

export type DataGridHeadColumnProps<T> = {
  onSort: (field: keyof T, sortable: boolean | undefined) => () => void;
  sorting: DataGridSort<T>[];
  renderCell?: RenderCell<T>;
  label?: string;
  sortable?: boolean;
  align?: TableCellProps['align'];
  field: keyof T;
};
