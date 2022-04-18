import { TableCellProps } from '@mui/material';

import { DataGridRow, SortState } from '../types';

export type DataGridHeadColumnProps<T = DataGridRow> = {
  onSort: (field: keyof T, sortable: boolean | undefined) => () => void;
  fitContent: boolean;
  sortDirection: SortState;
  hideSortIcon: boolean;
  label?: string;
  sortable?: boolean;
  align?: TableCellProps['align'];
  field: keyof T;
};
