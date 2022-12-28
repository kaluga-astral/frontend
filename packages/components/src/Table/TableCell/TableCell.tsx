import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableCellProps = WithoutEmotionSpecific<MuiTableCellProps>;

export const TableCell = (props: TableCellProps) => <MuiTableCell {...props} />;
