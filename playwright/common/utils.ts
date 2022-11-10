import type { Page } from '@playwright/test';
import { colord } from 'colord';

import { type Theme } from '../../packages/ui/src/theme';

export const hexToRgb = (hex: string): string => colord(hex).toRgbString();

export const getTheme = (page: Page): Promise<Theme> =>
  // невозможно сделать прямой импорт theme в тест из-за того, что там используется lodash на cjs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page.evaluate(() => (window as any).theme);
