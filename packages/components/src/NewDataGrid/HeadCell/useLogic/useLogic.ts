import type { DataGridRow } from '../../types';
import { type HeadCellProps } from '../HeadCell';

type UseLogicParams<
  TData = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = HeadCellProps<TData, TSortField>;

export const useLogic = <TData, TSortField extends keyof TData>({
  field,
  isSortable,
  startAdornment,
  onSort,
}: UseLogicParams<TData, TSortField>) => {
  const hasStartAdornment = Boolean(startAdornment);

  const handleSortClick = () => {
    if (field && isSortable) {
      onSort(field as TSortField);
    }
  };

  return {
    wrapperProps: {
      $hasStartAdornment: hasStartAdornment,
      onClick: handleSortClick,
    },
  };
};
