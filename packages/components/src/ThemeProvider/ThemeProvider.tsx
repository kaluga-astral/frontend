import { PropsWithChildren, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { GlobalStyles } from '../GlobalStyles';
import { Theme } from '../theme';

export type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { theme, children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
