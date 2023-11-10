import { Pagination as MuiPagination } from '@mui/material';

import type { PaginationProps } from './types';

export const Pagination = ({ ...props }: PaginationProps) => {
  return <MuiPagination shape="rounded" {...props} />;
};
