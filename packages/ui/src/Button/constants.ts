import { generateTestID } from '../utils';

export const BUTTON_TEST_ID_MAP = {
  root: generateTestID('button'),
  loader: generateTestID('button', 'loader'),
} as const;
