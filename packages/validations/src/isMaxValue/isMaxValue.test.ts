import { INCORRECT_MESSAGE } from '../constants';

import { getDefaultMessage, isMaxValue } from './isMaxValue';

describe('isMaxValue', () => {
  it.each<unknown>([-1, -44, '-44', '-1.12', ''])('Valid for: %s', (value) => {
    expect(isMaxValue({ max: -1 })(value)).toBe(undefined);
  });

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
    expect(isMaxValue({ max: 0 })(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>([1, Infinity, 0.34, '0.34'])('Valid for: %s', (value) => {
    expect(isMaxValue({ max: 0 })(value)).toBe(getDefaultMessage(0));
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(
      isMaxValue({ max: -22, message: { defaultMessage: customMessage } })(-11),
    ).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isMaxValue({ max: 22, exclude: isExclude })('exclude')).toBe(
      undefined,
    );
  });
});
