import { INCORRECT_MESSAGE } from '../constants';

import { getDefaultMessage, isMinLength } from './isMinLength';

describe('isMinLength', () => {
  it.each<unknown>([
    'asdsaxzcadsdaasd',
    '           d        ',
    '12341Nanasd2 2131',
    'undefined',
    'null',
    [0, 1, 23, 5, '', NaN, '  ', 0, 123, 's', null, 44, 12],
  ])('Valid for: %s', (value) => {
    expect(isMinLength(50)(value)).toBe(getDefaultMessage(50));
  });

  it.each<unknown>([
    0,
    1,
    true,
    { a: 1 },
    NaN,
    new Date(),
    Infinity,
    false,
    {},
  ])('Invalid for: %s', (value) => {
    expect(isMinLength(5)(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>(['123', '     ', [1], '', null, undefined])(
    'Valid for: %s',
    (value) => {
      expect(isMinLength(0)(value)).toBe(undefined);
    },
  );
});
