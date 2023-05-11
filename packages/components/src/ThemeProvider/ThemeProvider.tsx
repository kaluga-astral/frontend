import { ReactNode } from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { GlobalStyles } from '../GlobalStyles';
import { Theme } from '../theme';

export type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
  withoutGlobalStyles?: boolean;
};

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { children, theme, withoutGlobalStyles = false } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles withoutGlobalStyles={withoutGlobalStyles}>
          {children}
        </GlobalStyles>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
