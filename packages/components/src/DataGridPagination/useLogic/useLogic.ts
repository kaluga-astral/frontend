import { useMemo } from 'react';
import { type SelectChangeEvent } from '@mui/material';

export const useLogic = (
  totalCount: number,
  rowsPerPage: number,
  page: number,
  onSetCountPerPage?: (rowsPerPage: number) => void,
) => {
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

  const formattedRange = () => {
    return `${rangeStart} — ${rangeEnd} из ${totalCount} записей`;
  };

  if (totalCount <= rowsPerPage && !onSetCountPerPage) {
    return null;
  }

  const handleChangeRowsPerPage = (event: SelectChangeEvent<unknown>) => {
    if (onSetCountPerPage) {
      onSetCountPerPage?.(Number(event.target.value));
    }
  };

  return { handleChangeRowsPerPage, formattedRange, count };
};
