import { Global } from '@emotion/react';
import { CssBaseline, ScopedCssBaseline } from '@mui/material';
import { type CssBaselineProps } from '@mui/material/CssBaseline';

import { type Theme, useTheme } from '../theme';

type GlobalStylesProps = CssBaselineProps & {
  /**
   * Если `true` отключает глобальные стили.
   * Задаёт стили только для блока, который обёрнут в `ThemeProvider`.
   * Нужен для постепенного перевода сайта на библиотеку компонентов.
   * @default false
   */
  withScopedStyles?: boolean;
};

export const GlobalStyles = ({
  children,
  withScopedStyles = false,
  ...props
}: GlobalStylesProps) => {
  const theme: Theme = useTheme();

  return (
    <>
      {withScopedStyles ? (
        <ScopedCssBaseline {...props}>{children}</ScopedCssBaseline>
      ) : (
        <CssBaseline {...props}>{children}</CssBaseline>
      )}
      <Global
        styles={{
          html: {
            fontSize: theme.typography.htmlFontSize,
            [theme.breakpoints.down('sm')]: {
              fontSize: 16,
            },
          },
          '*': {
            scrollbarWidth: 'thin',
          },
          '*::-webkit-scrollbar': {
            width: 4,
            height: 4,
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: theme.shape.small,
            backgroundColor: theme.palette.grey[300],
          },
        }}
      />
    </>
  );
};
