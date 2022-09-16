import { ErrorInfo, ReactNode, createContext } from 'react';
import ru from 'date-fns/locale/ru';

export type ConfigContextProps = {
  locale?: Locale;
  captureException: (errorInfo: ErrorInfo, error: Error) => void;
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
  return (
    <ConfigContext.Provider value={{ locale, captureException }}>
      {children}
    </ConfigContext.Provider>
  );
};
