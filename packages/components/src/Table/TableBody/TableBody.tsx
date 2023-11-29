import {
  TableBody as MuiTableBody,
  type TableBodyProps as MuiTableBodyProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableBodyProps = WithoutEmotionSpecific<MuiTableBodyProps>;

export const TableBody = (props: TableBodyProps) => <MuiTableBody {...props} />;
