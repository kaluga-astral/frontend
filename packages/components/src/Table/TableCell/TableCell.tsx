import type { TableCellProps as MuiTableCellProps } from '@mui/material';
import { TableCell as MuiTableCell } from '@mui/material';

import type { WithoutEmotionSpecific } from '../../types';

export type TableCellProps = WithoutEmotionSpecific<MuiTableCellProps>;

export const TableCell = (props: TableCellProps) => <MuiTableCell {...props} />;
