import { DataGridColumns } from '../../types';

export interface CellProps<T> {
  row: T;
  cell: DataGridColumns<T>;
}
