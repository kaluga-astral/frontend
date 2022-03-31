import { ChangeEvent } from 'react';

import { DataGridColumns, DataGridRow } from '../types';

export type DataGridBodyProps<T = DataGridRow> = {
  columns: DataGridColumns<T>[];
  keyId: keyof DataGridRow;
  selectable: boolean;
  selectedRows?: Array<string>;
  rows: T[];
  onSelectRow: (
    rowId: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
};
