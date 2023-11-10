import type { ReactNode } from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { GlobalStyles } from '../GlobalStyles';
import type { Theme } from '../theme';

export type ThemeProviderProps = {
  children: ReactNode;

  /**
   * Объект темы, обычно являющийся результатом `createTheme()`.
   * Предоставленная тема будет объединена с темой по умолчанию.
   */
  theme: Theme;

  /**
   * Если `true` отключает глобальные стили.
   * Задаёт стили только для блока, который обёрнут в `ThemeProvider`.
   * Нужен для постепенного перевода сайта на библиотеку компонентов.
   * @default false
   */
  withScopedStyles?: boolean;
};

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { children, theme, withScopedStyles = false } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles withScopedStyles={withScopedStyles}>
          {children}
        </GlobalStyles>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};
