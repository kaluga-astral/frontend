import {
  TableContainer as MuiTableContainer,
  type TableContainerProps as MuiTableContainerProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableContainerProps =
  WithoutEmotionSpecific<MuiTableContainerProps>;

export const TableContainer = (props: TableContainerProps) => (
  <MuiTableContainer {...props} />
);
