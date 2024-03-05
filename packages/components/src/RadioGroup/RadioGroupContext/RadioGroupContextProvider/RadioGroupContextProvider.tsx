import { type ReactNode } from 'react';

import {
  RadioGroupContext,
  type RadioGroupContextProps,
} from '../RadioGroupContext';

export type Props = RadioGroupContextProps & {
  children: ReactNode;
};

export const RadioGroupContextProvider = ({ children, isError }: Props) => {
  return (
    <RadioGroupContext.Provider value={{ isError }}>
      {children}
    </RadioGroupContext.Provider>
  );
};
