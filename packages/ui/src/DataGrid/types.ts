import { DataGridProps as DataGridParams } from '@mui/x-data-grid';

export type DataGridProps<T> = Omit<
  DataGridParams,
  'onSelectionModelChange'
> & {
  onSelected?: (id: T[]) => void;
};
