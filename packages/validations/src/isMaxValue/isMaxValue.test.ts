import { INCORRECT_MESSAGE } from '../constants';

import { getDefaultMessage, isMaxValue } from './isMaxValue';

describe('isMaxValue', () => {
  it.each<unknown>([0, '0', -1, -44, '-44', '-0.12', ''])(
    'Valid for: %s',
    (value) => {
      expect(isMaxValue(0)(value)).toBe(undefined);
    },
  );

  it.each<unknown>([
    'a',
    true,
    ['v'],
    { a: 1 },
    [undefined],
    NaN,
    new Date(),
    '     ',
    '       41',
    false,
    [],
    {},
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isMaxValue(0)(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>([1, Infinity, 0.34, '0.34'])('Valid for: %s', (value) => {
    expect(isMaxValue(0)(value)).toBe(getDefaultMessage(0));
  });
});
