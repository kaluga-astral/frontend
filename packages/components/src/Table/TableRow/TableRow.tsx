import {
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableRowProps = WithoutEmotionSpecific<MuiTableRowProps>;

export const TableRow = (props: TableRowProps) => <MuiTableRow {...props} />;
