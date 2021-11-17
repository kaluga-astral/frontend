import { createTheme } from '../baseTheme';

describe('createTheme', () => {
  it('Theme merge done correctly', () => {
    const extendedTheme = createTheme({
      typography: { h1: { lineHeight: 12 } },
    });

    expect(extendedTheme.typography.h1.lineHeight).toBe(12);
  });
});
