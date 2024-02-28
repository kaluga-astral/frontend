import { type ReactNode } from 'react';

import {
  DescriptionContext,
  type DescriptionContextProps,
} from '../DescriptionContext';

export type DescriptionProviderProps = DescriptionContextProps & {
  children: ReactNode;
};

export const DescriptionContextProvider = ({
  children,
  leader,
  separator,
}: DescriptionProviderProps) => (
  <DescriptionContext.Provider value={{ leader, separator }}>
    {children}
  </DescriptionContext.Provider>
);
