import { createContext } from 'react';

import { ListProviderProps } from './types';

export const ListContext = createContext({ open: true });

export const ListProvider = ({ isOpen, children }: ListProviderProps) => (
  <ListContext.Provider value={isOpen}>{children}</ListContext.Provider>
);
