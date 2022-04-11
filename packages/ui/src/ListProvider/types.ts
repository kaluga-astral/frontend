import { ReactNode } from 'react';

export type ListContextType = {
  open: boolean;
};

export type ListProviderProps = {
  isOpen: ListContextType;
  children: ReactNode;
};
