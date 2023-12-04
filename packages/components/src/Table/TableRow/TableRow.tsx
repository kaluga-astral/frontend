import {
  TableRow as MuiTableRow,
  type TableRowProps as MuiTableRowProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableRowProps = WithoutEmotionSpecific<MuiTableRowProps>;

export const TableRow = (props: TableRowProps) => <MuiTableRow {...props} />;
