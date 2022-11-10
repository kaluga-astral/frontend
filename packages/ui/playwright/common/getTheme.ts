import type { Page } from '@playwright/test';
import { colord } from 'colord';

import type { Theme } from '../../src/theme';

export const getTheme = async (
  page: Page,
): Promise<{ theme: Theme; hexToRgb: (hex: string) => string }> => {
  // невозможно сделать прямой импорт theme в тест из-за того, что там используется lodash на cjs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme = await page.evaluate(() => (window as any).theme);

  return { theme, hexToRgb: (hex) => colord(hex).toRgbString() };
};
