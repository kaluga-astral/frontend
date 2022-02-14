import { createTheme } from '../baseTheme';
import { Brand } from '../constants';

describe('createTheme', () => {
  const fontsUrls = {
    bold: {
      woff: '',
      woff2: '',
    },
    regular: {
      woff: '',
      woff2: '',
    },
    medium: {
      woff: '',
      woff2: '',
    },
    light: {
      woff: '',
      woff2: '',
    },
  };

  it('Theme merge done correctly', () => {
    const extendedTheme = createTheme({
      brand: Brand.DEFAULT,
      fontsUrls,
      options: {
        typography: { h1: { lineHeight: 12 } },
      },
    });

    expect(extendedTheme.typography.h1.lineHeight).toBe(12);
  });

  it('Color should be taken depending on the brand', () => {
    const theme = createTheme({ brand: Brand.SIGN, fontsUrls });

    const expected = {
      primary: {
        main: '#376798',
        dark: '#325D89',
      },
      secondary: {
        main: '#4099AC',
        dark: '#325D89',
      },
    };

    expect(theme.palette).toMatchObject(expected);
  });

  it('Spacing are calculated correctly', () => {
    const theme = createTheme({ brand: Brand.SIGN, fontsUrls });

    expect(theme.spacing(2)).toBe('8px');
  });

  it('Theme has elevation params', () => {
    const theme = createTheme({ brand: Brand.SIGN, fontsUrls });

    expect(theme.elevation[100]).toBe(
      '0px 0px 1px 0px #072D574F, 0px 1px 1px 0px #072D5740;'
    );
  });
});
