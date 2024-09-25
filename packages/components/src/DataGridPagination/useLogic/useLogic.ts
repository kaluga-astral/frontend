import { useEffect, useRef } from 'react';
import { type SelectChangeEvent } from '@mui/material';

import { DEFAULT_ROWS_PER_PAGE } from '../constants';
import { type DataGridPaginationProps } from '../DataGridPagination';

type UseLogicParams = DataGridPaginationProps;

export const useLogic = ({
  totalCount,
  rowsPerPage = DEFAULT_ROWS_PER_PAGE,
  page,
  onSetCountPerPage,
}: UseLogicParams) => {
  const prevTotalCountRef = useRef<number>(0);

  useEffect(() => {
    if (totalCount) {
      prevTotalCountRef.current = totalCount;
    }
  }, [totalCount]);

  const actualTotalCount = totalCount || prevTotalCountRef.current;

  const pageCount = Math.ceil(actualTotalCount / rowsPerPage);

  const rangeStart = (page - 1) * rowsPerPage + 1;

  const rangeEnd = () => {
    const end = page * rowsPerPage;

    return end < actualTotalCount ? end : actualTotalCount;
  };

  const formattedRange = () => {
    return `${rangeStart} — ${rangeEnd()} из ${actualTotalCount} записей`;
  };

  const isVisiblePagination = !(
    !onSetCountPerPage && actualTotalCount <= rowsPerPage
  );

  const handleChangeRowsPerPage = (event: SelectChangeEvent<unknown>) => {
    onSetCountPerPage?.(Number(event.target.value));
  };

  return {
    isVisiblePagination,
    pageCount,
    formattedRange,
    handleChangeRowsPerPage,
  };
};
