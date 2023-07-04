import { ReactNode, createContext, useContext, useEffect } from 'react';

import { LanguageMap } from '../DatePicker/types';
import { russianMap } from '../DatePicker/constants/russianMap';

type Language = 'ru';

export type ConfigContextProps = {
  /**
   * @description язык локализации
   * @default 'ru'
   */
  language: Language;
  /**
   * @description языковая карта для DatePicker
   * @default russianMap
   */
  datePickerLanguageMap: LanguageMap;
  /*
   * Callback для отправки ошибки в sentry
   */
  // eslint-disable-next-line
  captureException: (error: any) => void;
  // новый проп для индикации отсутствующего значения
  emptySymbol?: string;
};

export type ConfigProviderProps = Partial<ConfigContextProps> & {
  children: ReactNode;
};

export const ConfigContext = createContext<ConfigContextProps>({
  language: 'ru',
  datePickerLanguageMap: russianMap,
  captureException: (error) => console.error(error),
  emptySymbol: '-', // установка значения по умолчанию
});

export const ConfigProvider = ({
  children,
  language = 'ru',
  datePickerLanguageMap = russianMap,
  captureException,
  emptySymbol = '-',
}: Partial<ConfigProviderProps>) => {
  useEffect(() => {
    if (!captureException) {
      console.warn(
        'ConfigProvider: Необходимо наличие captureException, связанного с сервисом мониторинга ошибок.\n' +
          'На данный момент все ошибки, отлавливаемые в ErrorBoundary будут выводиться только в консоль',
      );
    }
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        language,
        datePickerLanguageMap,
        captureException: captureException || ((error) => console.error(error)),
        emptySymbol, // передача значения emptySymbol в контекст
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

// функция для использования значения из контекста ConfigContext
export const useConfig = () => useContext(ConfigContext);

export default ConfigProvider;
