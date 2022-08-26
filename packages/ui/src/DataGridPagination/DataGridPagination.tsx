import { useMemo } from 'react';

import { Pagination } from '../Pagination';
import { PaginationProps } from '../Pagination';

import { PaginationWrapper, Range } from './styles';

export type DataGridPaginationProps = Omit<PaginationProps, 'count'> & {
  /**
   * Количество всех записей
   */
  totalCount: number;
  /**
   * Количество записей на страницу
   */
  rowsPerPage?: number;
  /**
   * Текущая страница
   */
  page: number;
};

export const DataGridPagination = ({
  page,
  rowsPerPage = 10,
  totalCount,
  className,
  ...props
}: DataGridPaginationProps) => {
  const count = Math.ceil(totalCount / rowsPerPage);
  const rangeStart = useMemo(
    () => (page - 1) * rowsPerPage + 1,
    [page, rowsPerPage],
  );
  const rangeEnd = useMemo(
    () => (page - 1) * rowsPerPage + rowsPerPage,
    [page, rowsPerPage],
  );
  const formattedRange = `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;

  return (
    <PaginationWrapper className={className}>
      <Range variant="h6">{formattedRange}</Range>
      <Pagination count={count} page={page} {...props} />
    </PaginationWrapper>
  );
};
