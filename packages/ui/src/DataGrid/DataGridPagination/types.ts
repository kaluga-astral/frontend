import { PaginationProps as MuiPaginationProps } from '@mui/material';

export type PaginationProps = Omit<MuiPaginationProps, 'count'> & {
  totalCount: number;
  rowsPerPage?: number;
  page: number;
};
