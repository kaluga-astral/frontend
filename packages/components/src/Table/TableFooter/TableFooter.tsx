import {
  TableFooter as MuiTableFooter,
  type TableFooterProps as MuiTableFooterProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableFooterProps = WithoutEmotionSpecific<MuiTableFooterProps>;

export const TableFooter = (props: TableFooterProps) => (
  <MuiTableFooter {...props} />
);
