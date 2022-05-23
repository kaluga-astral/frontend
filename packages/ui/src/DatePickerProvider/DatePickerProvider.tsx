import { ReactNode, createContext } from 'react';
import ru from 'date-fns/locale/ru';

export const DatePickerContext = createContext({ locale: ru });

type Props = {
  children: ReactNode;
  /**
   * Локализация
   */
  locale?: Locale;
};

export const DatePickerProvider = (props: Props) => {
  const { children, locale = ru } = props;

  return (
    <DatePickerContext.Provider value={{ locale }}>
      {children}
    </DatePickerContext.Provider>
  );
};
