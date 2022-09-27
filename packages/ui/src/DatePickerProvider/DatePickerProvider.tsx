import { PropsWithChildren, createContext } from 'react';

import { russianMap } from './constants/russianMap';
import { LanguageMap } from './types';

export const DatePickerContext = createContext<
  Required<DatePickerProviderProps>
>({
  locale: 'ru',
  languageMap: russianMap,
});

type DatePickerProviderProps = {
  /**
   * @description имя локали используемое для Intl
   * @example 'ru', 'en-GB'
   * @default 'ru'
   */
  locale?: string;
  /**
   * @description карта перевода, содержащая тексты используемые в календаре
   * @default 'russianMap'
   */
  languageMap?: LanguageMap;
};

export const DatePickerProvider = ({
  locale = 'ru',
  languageMap = russianMap,
  children,
}: PropsWithChildren<DatePickerProviderProps>) => (
  <DatePickerContext.Provider value={{ locale, languageMap }}>
    {children}
  </DatePickerContext.Provider>
);
