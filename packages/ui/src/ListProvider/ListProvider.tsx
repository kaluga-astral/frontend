import { createContext } from 'react';

export const ListContext = createContext({ open: true });

export const ListProvider = ListContext.Provider;
