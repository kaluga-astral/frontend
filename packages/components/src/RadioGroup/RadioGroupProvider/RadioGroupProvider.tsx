import { type ReactNode, createContext } from 'react';

export type RadioGroupContextProps = {
  /**
   * @description Флаг состояния ошибки
   */
  isError?: boolean;
};

export type RadioGroupProviderProps = RadioGroupContextProps & {
  children: ReactNode;
};

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  isError: false,
});

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
