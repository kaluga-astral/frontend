import { DataGridColumns } from '../types';

export type CellProps<Data> = {
  row: Data;
  cell: DataGridColumns<Data>;
};
