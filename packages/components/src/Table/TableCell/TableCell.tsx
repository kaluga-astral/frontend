import {
  TableCell as MuiTableCell,
  type TableCellProps as MuiTableCellProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableCellProps = WithoutEmotionSpecific<MuiTableCellProps>;

export const TableCell = (props: TableCellProps) => <MuiTableCell {...props} />;
