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

    const expected = {
      primary: {
        main: '#376798',
        dark: '#325D89',
      },
      secondary: {
        main: '#4199AC',
        dark: '#325D89',
      },
    };

    expect(theme.palette).toMatchObject(expected);
  });
});
