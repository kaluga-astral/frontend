import { PropsWithChildren, useEffect } from 'react';

import { ThemeProvider } from '../../src';

import { theme } from './theme';

export const Mount = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // невозможно сделать прямой импорт theme в тест из-за того, что там используется lodash на cjs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).theme = theme;
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
