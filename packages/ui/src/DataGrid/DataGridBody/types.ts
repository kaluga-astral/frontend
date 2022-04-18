import { ChangeEvent } from 'react';

import { DataGridColumns, DataGridRow } from '../types';

export type DataGridBodyProps<T = DataGridRow> = {
  columns: DataGridColumns<T>[];
  keyId: keyof DataGridRow;
  selectable?: boolean;
  selectedRows?: Array<T>;
  rows: T[];
  onSelectRow: (row: T) => (event: ChangeEvent<HTMLInputElement>) => void;
  minDisplayRows: number;
};
