import { Table as MuiTable, TableProps as MuiTableProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type TableProps = WithoutEmotionSpecific<MuiTableProps>;

export const Table = ({ size = 'small', ...props }: TableProps) => {
  return <MuiTable size={size} {...props} />;
};
