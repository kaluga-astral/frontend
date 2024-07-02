import { describe, expect, it } from 'vitest';
import { renderHook } from '@astral/tests';
import { theme } from '@astral/tests/src/theme';

import { ThemeProvider } from '../../../ThemeProvider';
import { type TypographyColor } from '../../Typography';

import { useTypographyColor } from './useTypographyColor';

describe('useTypographyColor', () => {
  it.each([
    ['warning' as TypographyColor, theme.palette.warning[800]],
    ['error' as TypographyColor, theme.palette.error[800]],
    ['success' as TypographyColor, theme.palette.success[800]],
    ['grey' as TypographyColor, theme.palette.grey[800]],
    ['red' as TypographyColor, theme.palette.red[800]],
    ['yellow' as TypographyColor, theme.palette.yellow[800]],
    ['green' as TypographyColor, theme.palette.green[800]],
    ['primary' as TypographyColor, theme.palette.primary[800]],
    ['secondary' as TypographyColor, theme.palette.secondary[800]],
    ['text' as TypographyColor, theme.palette.text.primary],
    ['textSecondary' as TypographyColor, theme.palette.text.secondary],
  ])(
    'Для color="%s" устанавливается цвет из темы "%s"',
    (color, expectedColor) => {
      const { result } = renderHook(() => useTypographyColor({ color }), {
        wrapper: ({ children }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        ),
      });

      expect(result.current).toBe(expectedColor);
    },
  );
});
