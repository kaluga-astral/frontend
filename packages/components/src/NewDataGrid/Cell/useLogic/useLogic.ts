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

  const isValidFormatValue = (value: CellValue): boolean => {
    return Boolean(value) || value === 0;
  };
  const formattedValue = useMemo(() => {
    if (format && isValidFormatValue(format(row))) {
      return format(row);
    }

    if (field && row[field] !== undefined) {
      return row[field];
    }

    return emptyCellValue;
  }, [field, format, row, emptyCellValue]);

  const hasStartAdornment = Boolean(startAdornment);

  return { formattedValue, hasStartAdornment };
};
