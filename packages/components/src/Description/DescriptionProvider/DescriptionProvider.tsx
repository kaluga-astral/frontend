import { ReactNode, createContext } from 'react';

export type DescriptionContextProps = {
  leader: boolean;
};

export type DescriptionProviderProps = DescriptionContextProps & {
  children: ReactNode;
};

export const DescriptionContext = createContext<DescriptionContextProps>({
  leader: false,
});

export const DescriptionProvider = ({
  children,
  leader,
}: DescriptionProviderProps) => (
  <DescriptionContext.Provider value={{ leader }}>
    {children}
  </DescriptionContext.Provider>
);
