import { INCORRECT_MESSAGE } from '../constants';

import { getDefaultMessage, isMaxLength } from './isMaxLength';

describe('isMaxLength', () => {
  it.each<unknown>([
    'asdsaxzcadsdaasd',
    '           d        ',
    '12341Nanasd2 2131',
    [0, 1, 23, 5, '', NaN, '  ', 0, 123, 's', null, 44, 12],
  ])('Invalid for: %s', (value) => {
    expect(isMaxLength({ max: 10 })(value)).toBe(getDefaultMessage(10));
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
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isMaxLength({ max: 10 })(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>(['', '     ', [], 'undefined', 'null'])(
    'Valid for: %s',
    (value) => {
      expect(isMaxLength({ max: 10 })(value)).toBe(undefined);
    },
  );

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(
      isMaxLength({ max: 1, message: { defaultMessage: customMessage } })(
        '12123',
      ),
    ).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isMaxLength({ max: 1, exclude: isExclude })('exclude')).toBe(
      undefined,
    );
  });
});
