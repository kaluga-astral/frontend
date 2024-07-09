import { useMemo, useState } from 'react';
import { type SelectChangeEvent } from '@mui/material';

export const useLogic = (
  totalCount: number,
  rowsPerPage: number,
  page: number,
  onSetCountPerPage?: (rowsPerPage: number) => void,
) => {
  const count = Math.ceil(totalCount / rowsPerPage);
  const [isVisiblePagination, setIsVisiblePagination] = useState(true);
  const rangeStart = useMemo(
    () => (page - 1) * rowsPerPage + 1,
    [page, rowsPerPage],
  );
  const rangeEnd = useMemo(() => {
    const end = page * rowsPerPage;

    return end < totalCount ? end : totalCount;
  }, [page, rowsPerPage, totalCount]);

  const formattedRange = () => {
    return `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;
  };

  // useMemo позволяет избежать постоянного Re-rendering
  useMemo(() => {
    if (totalCount <= rowsPerPage && !onSetCountPerPage) {
      setIsVisiblePagination(false);
    }
  }, [totalCount, rowsPerPage, onSetCountPerPage]);

  const handleChangeRowsPerPage = (event: SelectChangeEvent<unknown>) => {
    onSetCountPerPage?.(Number(event.target.value));
  };

  return {
    handleChangeRowsPerPage,
    formattedRange,
    count,
    isVisiblePagination,
  };
};
