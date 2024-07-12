import type { DataGridRow } from '../../types';
import { type HeadCellProps } from '../HeadCell';

type UseLogicParams<
  TData = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = HeadCellProps<TData, TSortField>;

export const useLogic = <TData, TSortField extends keyof TData>({
  field,
  sortable,
  onSort,
}: UseLogicParams<TData, TSortField>) => {
  const handleSortClick = () => {
    if (field && sortable) {
      onSort(field as TSortField);
    }
  };

  return {
    wrapperProps: {
      onClick: handleSortClick,
    },
  };
};
