import { type SelectChangeEvent } from '@mui/material';

export const useLogic = (
  totalCount: number,
  rowsPerPage: number,
  page: number,
  onSetCountPerPage?: (rowsPerPage: number) => void,
) => {
  const pageCount = Math.ceil(totalCount / rowsPerPage);
  const rangeStart = (page - 1) * rowsPerPage + 1;
  const rangeEnd = () => {
    const end = page * rowsPerPage;

    return end < totalCount ? end : totalCount;
  };

  const formattedRange = () => {
    return `${rangeStart} — ${rangeEnd()} из ${totalCount} записей`;
  };

  const isVisiblePagination = !(
    !onSetCountPerPage && totalCount <= rowsPerPage
  );

  const handleChangeRowsPerPage = (event: SelectChangeEvent<unknown>) => {
    onSetCountPerPage?.(Number(event.target.value));
  };

  return {
    handleChangeRowsPerPage,
    formattedRange,
    pageCount,
    isVisiblePagination,
  };
};
