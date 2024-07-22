import { type BodyProps } from '../Body';

type UseLogicParams<TData extends Record<string, unknown>> = BodyProps<TData>;

export const useLogic = <TData extends Record<string, unknown>>({
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
