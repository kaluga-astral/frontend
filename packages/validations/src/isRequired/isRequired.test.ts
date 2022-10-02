import { REQUIRED_RULE_DEFAULT_MESSAGE, isRequired } from './isRequired';

describe('isRequired', () => {
  it.each<unknown>([
    'a',
    0,
    1,
    true,
    ['v'],
    { a: 1 },
    [undefined],
    NaN,
    new Date(),
  ])('Valid for: %s', (value) => {
    expect(isRequired()(value)).toBe(undefined);
  });

  it.each<unknown>(['', '     ', false, [], {}, null, undefined])(
    'Invalid for: %s',
    (value) => {
      expect(isRequired()(value)).toBe(REQUIRED_RULE_DEFAULT_MESSAGE);
    },
  );

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isRequired(customMessage)('')).toBe(customMessage);
  });
});
