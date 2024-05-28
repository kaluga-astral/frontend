import { expect } from 'vitest';

import { isDate } from './isDate';

describe('isDate', () => {
  it.each(['', undefined, null, 'otherString', Infinity, NaN])(
    'Value "%s" не является валидной датой',
    (value) => {
      expect(isDate(value)).toBeFalsy();
    },
  );

  it.each(['01.01.2024', 2024, new Date('01.01.2024')])(
    'Value "%s" - валидная дата',
    (value) => {
      expect(isDate(value)).toBeTruthy();
    },
  );
});
