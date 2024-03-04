import { type ReactNode } from 'react';

import {
  DescriptionContext,
  type DescriptionContextProps,
} from '../DescriptionContext';

type Props = DescriptionContextProps & {
  children: ReactNode;
};

export const DescriptionContextProvider = ({
  children,
  leader,
  separator,
}: Props) => (
  <DescriptionContext.Provider value={{ leader, separator }}>
    {children}
  </DescriptionContext.Provider>
);
