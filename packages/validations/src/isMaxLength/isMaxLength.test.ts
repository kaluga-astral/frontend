import { INCORRECT_MESSAGE } from '../constants';

import { getDefaultMessage, isMaxLength } from './isMaxLength';

describe('isMaxLength', () => {
  it.each<unknown>([
    'asdsaxzcadsdaasd',
    '           d        ',
    '12341Nanasd2 2131',
    [0, 1, 23, 5, '', NaN, '  ', 0, 123, 's', null, 44, 12],
  ])('Invalid for: %s', (value) => {
    expect(isMaxLength(10)(value)).toBe(getDefaultMessage(10));
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
    expect(isMaxLength(10)(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>(['', '     ', [], null, undefined, 'undefined', 'null'])(
    'Valid for: %s',
    (value) => {
      expect(isMaxLength(10)(value)).toBe(undefined);
    },
  );
});
