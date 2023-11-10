import type { TableSortLabelProps as MuiTableSortLabelProps } from '@mui/material';
import { TableSortLabel as MuiTableSortLabel } from '@mui/material';

import type { WithoutEmotionSpecific } from '../../types';

export type TableSortLabelProps =
  WithoutEmotionSpecific<MuiTableSortLabelProps>;

export const TableSortLabel = (props: TableSortLabelProps) => (
  <MuiTableSortLabel {...props} />
);
