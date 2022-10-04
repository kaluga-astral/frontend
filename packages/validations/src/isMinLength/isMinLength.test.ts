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
    expect(isMinLength({ min: 50 })(value)).toBe(getDefaultMessage(50));
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
    expect(isMinLength({ min: 5 })(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>(['123', '     ', [1], ''])('Valid for: %s', (value) => {
    expect(isMinLength({ min: 0 })(value)).toBe(undefined);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(
      isMinLength({ min: 111, message: { defaultMessage: customMessage } })(
        '12123',
      ),
    ).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isMinLength({ min: 123, exclude: isExclude })('exclude')).toBe(
      undefined,
    );
  });
});
