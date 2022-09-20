import { ReactNode, createContext, useEffect } from 'react';
import ru from 'date-fns/locale/ru';

export type ConfigContextProps = {
  /*
   * Локализация
   */
  locale: Locale;
  /*
   * Callback для отправки ошибки в sentry
   */
  // eslint-disable-next-line
  captureException: (error: any) => void;
};

export type ConfigProviderProps = Partial<ConfigContextProps> & {
  children: ReactNode;
};

export const ConfigContext = createContext<ConfigContextProps>({
  locale: ru,
  captureException: (error) => console.error(error),
});

export const ConfigProvider = ({
  children,
  locale = ru,
  captureException,
}: ConfigProviderProps) => {
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
        locale,
        captureException: captureException || ((error) => console.error(error)),
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
