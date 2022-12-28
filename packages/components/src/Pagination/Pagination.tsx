import { Pagination as MuiPagination } from '@mui/material';

import { PaginationProps } from './types';

export const Pagination = ({ ...props }: PaginationProps) => {
  return <MuiPagination shape="rounded" {...props} />;
};
