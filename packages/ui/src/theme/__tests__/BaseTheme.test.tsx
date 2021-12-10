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

  it('Spacing are calculated correctly', () => {
    const theme = createTheme(Brand.SIGN);

    expect(theme.spacing(2)).toBe('8px');
  });

  it('Theme has elevation params', () => {
    const theme = createTheme(Brand.SIGN);

    expect(theme.elevation[100]).toBe(
      'box-shadow: 0px 0px 1px 0px #072D574F; box-shadow: 0px 1px 1px 0px #072D5740;'
    );
  });
});
