import { useMemo } from 'react';

import type { CellValue } from '../../types';
import type { CellProps } from '../Cell';

type UseLogicParams<TData extends Record<string, CellValue>> = CellProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  row,
  cell,
  emptyCellValue,
  startAdornment,
}: UseLogicParams<TData>) => {
  const { format, field } = cell;

  const isValidValue = (value: CellValue | keyof TData): boolean => {
    return Boolean(value) || value === 0;
  };

  const formattedValue = useMemo(() => {
    if (format && isValidValue(format(row))) {
      return format(row);
    }

    if (field && isValidValue(row[field])) {
      return row[field];
    }

    return emptyCellValue;
  }, [field, format, row, emptyCellValue]);

  const hasStartAdornment = Boolean(startAdornment);

  return { formattedValue, hasStartAdornment };
};
