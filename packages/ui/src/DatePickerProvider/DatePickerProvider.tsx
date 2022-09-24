import { PropsWithChildren, createContext } from 'react';

export const DatePickerContext = createContext({ locale: 'ru' });

type DatePickerProviderProps = {
  /**
   * Локализация
   */
  locale?: 'string';
};

export const DatePickerProvider = ({
  locale,
  children,
}: PropsWithChildren<DatePickerProviderProps>) => (
  <DatePickerContext.Provider value={{ locale: locale || 'ru' }}>
    {children}
  </DatePickerContext.Provider>
);
