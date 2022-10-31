import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableContainerProps =
  WithoutEmotionSpecific<MuiTableContainerProps>;

export const TableContainer = (props: TableContainerProps) => (
  <MuiTableContainer {...props} />
);
