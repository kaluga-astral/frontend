import { type ReactNode } from 'react';

import {
  RadioGroupContext,
  type RadioGroupContextProps,
} from '../RadioGroupContext';

export type RadioGroupProviderProps = RadioGroupContextProps & {
  children: ReactNode;
};

export const RadioGroupProvider = ({
  children,
  isError,
}: RadioGroupProviderProps) => {
  return (
    <RadioGroupContext.Provider value={{ isError }}>
      {children}
    </RadioGroupContext.Provider>
  );
};
