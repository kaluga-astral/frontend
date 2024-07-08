import { useMemo } from 'react';
import { type SelectChangeEvent } from '@mui/material';

import { Pagination } from '../Pagination';
import { type PaginationProps } from '../Pagination';
import { MenuItem } from '../MenuItem';

import {
  PaginationWrapper,
  Range,
  RangeSelector,
  RangeWrapper,
  StyledSelect,
} from './styles';

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
  /**
   * Выбор количества записей на странице с помощью селектора
   */
  onSetCount?: (rowsPerPage: number) => void;
  /**
   * Массив значений селектора
   */
  selectOptions?: number[];
};

export const DataGridPagination = ({
  page,
  rowsPerPage = 10,
  totalCount,
  className,
  onSetCount,
  selectOptions = [5, 10, 20, 25, 50, 100],
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

  const formattedRange = useMemo(() => {
    return `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;
  }, [rangeStart, rowsPerPage, rangeEnd]);

  if (totalCount <= rowsPerPage && !onSetCount) {
    return null;
  }

  const handleChangeRowsPerPage = (event: SelectChangeEvent<unknown>) => {
    if (onSetCount) {
      onSetCount(Number(event.target.value));
    }
  };

  return (
    <PaginationWrapper className={className}>
      <RangeWrapper>
        {onSetCount && (
          <>
            <RangeSelector variant="body1">Строк на странице:</RangeSelector>
            <StyledSelect
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              {selectOptions.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </StyledSelect>
          </>
        )}
        <Range variant="h6">{formattedRange}</Range>
      </RangeWrapper>
      <Pagination count={count} page={page} {...props} />
    </PaginationWrapper>
  );
};
