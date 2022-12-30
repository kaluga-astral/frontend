import { PropsWithChildren } from 'react';

import { ThemeProvider } from '../../packages/components/src';

import { theme } from './theme';

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
