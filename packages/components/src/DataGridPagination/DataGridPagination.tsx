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
   * Максимальное количество записей на страницу
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
  const rangeEnd = useMemo(() => {
    const isLastPage = Math.ceil(totalCount / rowsPerPage) === page;

    if (isLastPage) {
      // получаем оставшееся кол-во строк на последней странице
      const lastPageRowsCount = totalCount % rowsPerPage;

      if (lastPageRowsCount) {
        // Вычисляем итоговое количество строк. Пример: totalCount=26
        // (10 * 3) - (10 - 6) = 30 - 4 = 26
        return rowsPerPage * page - (rowsPerPage - lastPageRowsCount);
      }
    }

    return rowsPerPage * page;
  }, [page, rowsPerPage, totalCount]);
  const formattedRange = `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;

  if (totalCount <= rowsPerPage) {
    return null;
  }

  return (
    <PaginationWrapper className={className}>
      <Range variant="h6">{formattedRange}</Range>
      <Pagination count={count} page={page} {...props} />
    </PaginationWrapper>
  );
};
