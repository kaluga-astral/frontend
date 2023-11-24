import { type ReactNode, createContext } from 'react';

import { DEFAULT_SEPARATOR } from '../constants';

export type DescriptionContextProps = {
  leader: boolean;
  separator: string;
};

export type DescriptionProviderProps = DescriptionContextProps & {
  children: ReactNode;
};

export const DescriptionContext = createContext<DescriptionContextProps>({
  leader: false,
  separator: DEFAULT_SEPARATOR,
});

export const DescriptionProvider = ({
  children,
  leader,
  separator,
}: DescriptionProviderProps) => (
  <DescriptionContext.Provider value={{ leader, separator }}>
    {children}
  </DescriptionContext.Provider>
);
