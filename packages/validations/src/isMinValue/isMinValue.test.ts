import { INCORRECT_MESSAGE } from '../constants';

import { getDefaultMessage, isMinValue } from './isMinValue';

describe('isMinValue', () => {
  it.each<unknown>([-1, '-44', '-0.12'])('Invalid for: %s', (value) => {
    expect(isMinValue(0)(value)).toBe(getDefaultMessage(0));
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
    '         12',
    false,
    [],
    {},
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isMinValue(0)(value)).toBe(INCORRECT_MESSAGE);
  });

  it.each<unknown>([0, 1, Infinity, 0.34, '0.34', '0', '', -9])(
    'Valid for: %s',
    (value) => {
      expect(isMinValue(-55)(value)).toBe(undefined);
    },
  );

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isMinValue(-2, customMessage)(-11)).toBe(customMessage);
  });
});
