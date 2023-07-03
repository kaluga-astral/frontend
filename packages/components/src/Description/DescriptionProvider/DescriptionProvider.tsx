import { ReactNode, createContext } from 'react';

export type DescriptionContextProps = {
  leader: boolean;
  separator: string;
};

export type DescriptionProviderProps = DescriptionContextProps & {
  children: ReactNode;
};

export const DescriptionContext = createContext<DescriptionContextProps>({
  leader: false,
  separator: ':',
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
