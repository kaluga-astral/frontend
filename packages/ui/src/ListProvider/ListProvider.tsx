import { ProviderProps, createContext } from 'react';

import { ListContextType } from './types';

export const ListContext = createContext({ open: true });

export const ListProvider = ({
  value,
  children,
}: ProviderProps<ListContextType>) => (
  <ListContext.Provider value={value}>{children}</ListContext.Provider>
);
