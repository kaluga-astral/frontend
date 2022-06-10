import { ChangeEvent } from 'react';

import { DataGridColumns, DataGridRow } from '../types';

export type DataGridBodyProps<Data> = {
  columns: DataGridColumns<Data>[];
  keyId: keyof DataGridRow;
  onRowClick?: (row: Data) => void;
  selectable?: boolean;
  selectedRows?: Array<Data>;
  rows: Data[];
  onSelectRow: (row: Data) => (event: ChangeEvent<HTMLInputElement>) => void;
  minDisplayRows: number;
};
