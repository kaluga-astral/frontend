import { PropsWithChildren } from 'react';

import { ThemeProvider } from '../../packages/ui/src';

import { theme } from './theme';

export const Mount = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
