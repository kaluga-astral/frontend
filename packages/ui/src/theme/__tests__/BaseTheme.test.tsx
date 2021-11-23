import { createTheme } from '../baseTheme';
import { Brand } from '../../../types/brands';
import { brandColors } from '../palette';

describe('createTheme', () => {
  it('Theme merge done correctly', () => {
    const extendedTheme = createTheme(Brand.DEFAULT, {
      typography: { h1: { lineHeight: 12 } },
    });

    expect(extendedTheme.typography.h1.lineHeight).toBe(12);
  });

  it('Color should be taken depending on the brand', () => {
    const theme = createTheme(Brand.SIGN);

    expect(theme.palette.primary.main === brandColors[Brand.SIGN].primary);
  });
});
