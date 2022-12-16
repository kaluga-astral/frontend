import { PropsWithChildren } from 'react';

type DatePickerProviderProps = {
  //eslint-disable-next-line
  locale?: any;
};

/**
 * @deprecated отказываемся от использования в пользу ConfigProvider
 */
export const DatePickerProvider = ({
  children,
}: PropsWithChildren<DatePickerProviderProps>) => <>{children}</>;
