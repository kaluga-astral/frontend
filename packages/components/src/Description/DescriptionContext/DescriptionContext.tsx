import { createContext } from 'react';

import { DEFAULT_SEPARATOR } from '../constants';

export type DescriptionContextProps = {
  leader: boolean;
  separator: string;
  direction: string;
};

export const DescriptionContext = createContext<DescriptionContextProps>({
  leader: false,
  separator: DEFAULT_SEPARATOR,
  direction: 'default',
});
