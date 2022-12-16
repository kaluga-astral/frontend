import {
  TableSortLabel as MuiTableSortLabel,
  TableSortLabelProps as MuiTableSortLabelProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableSortLabelProps =
  WithoutEmotionSpecific<MuiTableSortLabelProps>;

export const TableSortLabel = (props: TableSortLabelProps) => (
  <MuiTableSortLabel {...props} />
);
