import { createContext } from 'react';

export type RadioGroupContextProps = {
  isError?: boolean;
};

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  isError: false,
});
