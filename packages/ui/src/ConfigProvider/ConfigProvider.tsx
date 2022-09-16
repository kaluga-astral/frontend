import { ErrorInfo, ReactNode, createContext, useEffect } from 'react';
import ru from 'date-fns/locale/ru';

export type ConfigContextProps = {
  /*
   * Локализация
   */
  locale?: Locale;
  /*
   * Callback для отправки ошибки в sentry
   */
  captureException?: (errorInfo: ErrorInfo, error: Error) => void;
};

export type ConfigProviderProps = ConfigContextProps & {
  children: ReactNode;
};

export const ConfigContext = createContext<ConfigContextProps>({
  locale: ru,
  captureException: (errorInfo, error) => console.error(errorInfo, error),
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
    <ConfigContext.Provider value={{ locale, captureException }}>
      {children}
    </ConfigContext.Provider>
  );
};
