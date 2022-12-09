import {
  UseQueryOptions as UseTanStackQueryOptions,
  UseQueryResult as UseTanStackQueryResult,
  useQuery as useTanStackQuery,
} from '@tanstack/react-query';
import { useMemo } from 'react';

import {
  DataError,
  QueryClientCache,
  QueryFetchPolicy,
} from '../../../services';

type DefaultError = DataError<Record<string, unknown>>;

export type UseQueryOptions<TData, TError = DefaultError> = Omit<
  UseTanStackQueryOptions<TData, TError>,
  'cacheTime' | 'staleTime'
> & {
  /**
   * @description Указывает на то, как кэшировать запрос. Аналог fetchPolicy в apollo
   * */
  fetchPolicy?: QueryFetchPolicy;
};

export type UseQueryResult<
  TData,
  TError = DefaultError,
> = UseTanStackQueryResult<TData, TError>;

export const useQuery = <TData, TError = DefaultError>(
  key: string[],
  fnData: () => Promise<TData>,
  options: UseQueryOptions<TData, TError> = { fetchPolicy: 'network-only' },
): UseQueryResult<TData, TError> => {
  const { fetchPolicy, ...queryOptions } = options;

  const cache = useMemo(() => {
    if (fetchPolicy === 'network-only') {
      // запрос сразу помечается как устаревший, но в кэше еще немного лежит
      return { cacheTime: QueryClientCache.Few, staleTime: 0 };
    }

    return {
      cacheTime: QueryClientCache.MaxLong,
      staleTime: QueryClientCache.MaxLong,
    };
  }, [fetchPolicy]);

  return useTanStackQuery<TData, TError>(key, fnData, {
    ...queryOptions,
    ...cache,
  });
};
