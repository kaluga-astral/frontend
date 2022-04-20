import { Table as MuiTable, TableProps } from '@mui/material';

export const Table = ({ size = 'small', ...props }: TableProps) => {
  return <MuiTable size={size} {...props} />;
};
