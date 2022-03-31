import { Pagination as MuiPagination } from '@mui/material';
import { useMemo } from 'react';

import { PaginationWrapper, Range } from './styled';
import { PaginationProps } from './types';

export const Pagination = ({
  page,
  rowsPerPage = 10,
  totalCount,
  className,
  ...props
}: PaginationProps) => {
  const count = Math.ceil(totalCount / rowsPerPage);
  const rangeStart = useMemo(() => page * rowsPerPage, [page]);
  const rangeEnd = useMemo(() => page * rowsPerPage + rowsPerPage, [page]);
  const formattedRange = `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;

  return (
    <PaginationWrapper className={className}>
      <Range variant="h6">{formattedRange}</Range>
      <MuiPagination shape="rounded" count={count} {...props} />
    </PaginationWrapper>
  );
};
