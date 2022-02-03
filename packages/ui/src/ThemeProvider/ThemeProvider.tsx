import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC } from 'react';

import { Theme } from '../theme';

type Props = { theme: Theme };

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
