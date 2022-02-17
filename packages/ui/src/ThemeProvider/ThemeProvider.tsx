import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { FC } from 'react';

import { GlobalStyles } from '../GlobalStyles';

type Props = { theme: Theme };

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
