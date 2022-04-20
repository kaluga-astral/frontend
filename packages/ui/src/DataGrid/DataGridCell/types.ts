import { DataGridColumns } from '../types';

export type CellProps<T> = {
  row: T;
  cell: DataGridColumns<T>;
};
