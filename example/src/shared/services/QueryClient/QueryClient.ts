import {
  FetchQueryOptions,
  QueryClient,
  QueryFunction,
} from '@tanstack/react-query';

import { QueryClientCache } from './enums';

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        cacheTime: QueryClientCache.MaxLong,
        refetchOnWindowFocus: false,
      },
    },
  });

export const queryClient = createQueryClient();

export type { QueryClient, QueryFunction, FetchQueryOptions };
