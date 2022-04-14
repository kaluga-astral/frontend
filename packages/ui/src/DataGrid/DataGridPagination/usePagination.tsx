import { useMemo } from 'react';

import { PaginationWrapper, Range } from './styled';
import { DataGridPaginationProps } from './types';

export function usePagination({
  Pagination,
  totalCount,
  page,
  rowsPerPage = 10,
  ...props
}: DataGridPaginationProps) {
  const count = Math.ceil(totalCount / rowsPerPage);
  const rangeStart = useMemo(() => page * rowsPerPage, [page]);
  const rangeEnd = useMemo(() => page * rowsPerPage + rowsPerPage, [page]);
  const formattedRange = `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;

  return (
    <PaginationWrapper>
      <Range variant="h6">{formattedRange}</Range>
      <Pagination count={count} {...props} />
    </PaginationWrapper>
  );
}
