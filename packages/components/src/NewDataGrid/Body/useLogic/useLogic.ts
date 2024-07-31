import type { CellValue } from '../../types';
import { type BodyProps } from '../Body';

type UseLogicParams<TData extends Record<string, CellValue>> = BodyProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  isLoading,
  isError,
  rows,
}: UseLogicParams<TData>) => {
  const isNoData = !Boolean(rows.length);

  return {
    isNoData,
    contentStateProps: {
      isLoading: isLoading && isNoData,
      isError: isError && isNoData,
    },
  };
};
