import { useCallback, useMemo } from 'react';

import { SortStates } from '../../enums';
import type { CellValue, DataGridRow } from '../../types';
import { type HeadProps } from '../Head';

type UseLogicParams<
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = HeadProps<TData, TSortField>;

export const useLogic = <
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
>({
  rowsCount,
  sorting,
  uncheckedRowsCount,
  onSort,
}: UseLogicParams<TData, TSortField>) => {
  const isChecked = useMemo(
    () => !Boolean(uncheckedRowsCount) && rowsCount > 0,
    [uncheckedRowsCount, rowsCount],
  );

  const isIndeterminate = useMemo(
    () => uncheckedRowsCount > 0 && uncheckedRowsCount < rowsCount,
    [uncheckedRowsCount, rowsCount],
  );

  const handleSort = useCallback(
    (field: TSortField) => {
      if (!onSort) {
        return;
      }

      const isCurrentField = sorting?.fieldId === field;

      // если для выбранного столбца текущая сортировка ASC - меняем на DESC
      if (isCurrentField && sorting?.sort === SortStates.ASC) {
        return onSort({ fieldId: field, sort: SortStates.DESC });
      }

      // если для выбранного столбца текущая сортировка DESC - убираем сортировку
      if (isCurrentField && sorting?.sort === SortStates.DESC) {
        return onSort(undefined);
      }

      // если для выбранного столбца нет сортировки - добавляем сортировку ASC
      onSort({ fieldId: field, sort: SortStates.ASC });
    },
    [sorting, onSort],
  );

  return {
    handleSort,
    checkboxProps: {
      checked: isChecked,
      indeterminate: isIndeterminate,
    },
  };
};
