import { ChangeEvent } from 'react';

import { DataGridColumns, DataGridRow, DataGridSort } from '../types';

export type DataGridHeadProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  columns: DataGridColumns<Data>[];
  selectable: boolean;
  onSelectAllRows: (event: ChangeEvent<HTMLInputElement>) => void;
  sorting: DataGridSort<SortField>[];
  onSort: (sorting: DataGridSort<SortField>[]) => void;
  uncheckedRowsCount: number;
  rowsCount: number;
};
