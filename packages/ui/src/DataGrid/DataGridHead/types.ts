import { ChangeEvent } from 'react';

import { DataGridColumns, DataGridRow, DataGridSort } from '../types';

export type DataGridHeadProps<T = DataGridRow> = {
  columns: DataGridColumns<T>[];
  selectable: boolean;
  onSelectAllRows: (event: ChangeEvent<HTMLInputElement>) => void;
  sorting: DataGridSort<T>[];
  onSort: (sorting: DataGridSort<T>[]) => void;
  uncheckedRowsCount: number;
  rowsCount: number;
};
