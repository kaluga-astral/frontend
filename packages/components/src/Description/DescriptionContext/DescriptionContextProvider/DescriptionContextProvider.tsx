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
  direction,
}: Props) => (
  <DescriptionContext.Provider value={{ leader, separator, direction }}>
    {children}
  </DescriptionContext.Provider>
);
