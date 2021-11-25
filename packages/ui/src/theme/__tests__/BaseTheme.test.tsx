import { createTheme } from '../baseTheme';
import { Brand } from '../constants';

describe('createTheme', () => {
  it('Theme merge done correctly', () => {
    const extendedTheme = createTheme(Brand.DEFAULT, {
      typography: { h1: { lineHeight: 12 } },
    });

    expect(extendedTheme.typography.h1.lineHeight).toBe(12);
  });

  it('Color should be taken depending on the brand', () => {
    const theme = createTheme(Brand.SIGN);

    expect(theme.palette.primary.main).toBe('#376798');
    expect(theme.palette.primary.dark).toBe('#325D89');
    expect(theme.palette.secondary.main).toBe('#4199AC');
    expect(theme.palette.secondary.dark).toBe('#325D89');
  });
});
