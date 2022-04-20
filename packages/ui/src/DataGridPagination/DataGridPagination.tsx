import { useMemo } from 'react';

import { Pagination } from '../Pagination';

import { PaginationWrapper, Range } from './styled';
import { DataGridPaginationProps } from './types';

export const DataGridPagination = ({
  page,
  rowsPerPage = 10,
  totalCount,
  className,
  ...props
}: DataGridPaginationProps) => {
  const count = Math.ceil(totalCount / rowsPerPage);
  const rangeStart = useMemo(() => page * rowsPerPage, [page]);
  const rangeEnd = useMemo(() => page * rowsPerPage + rowsPerPage, [page]);
  const formattedRange = `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;

  return (
    <PaginationWrapper className={className}>
      <Range variant="h6">{formattedRange}</Range>
      <Pagination count={count} {...props} />
    </PaginationWrapper>
  );
};
