import {
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableFooterProps = WithoutEmotionSpecific<MuiTableFooterProps>;

export const TableFooter = (props: TableFooterProps) => (
  <MuiTableFooter {...props} />
);
