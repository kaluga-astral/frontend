import { useMemo } from 'react';

import type { CellProps } from '../Cell';

type UseLogicParams<TData extends object> = CellProps<TData>;

export const useLogic = <TData extends object>({
  row,
  cell,
  emptyCellValue,
  startAdornment,
}: UseLogicParams<TData>) => {
  const { format, field } = cell;

  const formattedValue = useMemo(() => {
    if (format) {
      return format(row);
    }

    if (field) {
      return row[field];
    }

    return emptyCellValue;
  }, [field, format, row, emptyCellValue]);

  const hasStartAdornment = Boolean(startAdornment);

  return { formattedValue, hasStartAdornment };
};
