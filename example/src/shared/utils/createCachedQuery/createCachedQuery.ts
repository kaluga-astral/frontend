import { QueryFetchPolicy } from '@example/shared';

import { DataError, QueryClient } from '../../services';

type DefaultError = DataError<Record<string, unknown>>;

type Options = {
  fetchPolicy?: QueryFetchPolicy;
};

export const createCachedQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
>(
  queryClient: QueryClient,
  queryKey: string[],
  fetch: () => Promise<TQueryFnData>,
  options: Options = {
    fetchPolicy: 'network-only',
  },
): Promise<TQueryFnData> => {
  const { fetchPolicy } = options;

  if (fetchPolicy === 'cache-first') {
    return queryClient.fetchQuery<TQueryFnData, TError>(queryKey, fetch);
  }

  return fetch();
};
