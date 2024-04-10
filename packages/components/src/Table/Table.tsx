import {
  Table as MuiTable,
  type TableProps as MuiTableProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type TableProps = WithoutEmotionSpecific<MuiTableProps>;

export const Table = ({ size = 'small', ...props }: TableProps) => {
  return <MuiTable size={size} {...props} />;
};
