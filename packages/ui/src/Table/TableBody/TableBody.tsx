import {
  TableBody as MuiTableBody,
  TableBodyProps as MuiTableBodyProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableBodyProps = WithoutEmotionSpecific<MuiTableBodyProps>;

export const TableBody = (props: TableBodyProps) => <MuiTableBody {...props} />;
