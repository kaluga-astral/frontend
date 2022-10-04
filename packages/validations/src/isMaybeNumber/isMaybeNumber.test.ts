import {
  IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE,
  isMaybeNumber,
} from './isMaybeNumber';

describe('isMaybeNumber', () => {
  it.each<unknown>([-1, '-44', '-0.12', 2e3, '2e3'])(
    'Valid for: %s',
    (value) => {
      expect(isMaybeNumber()(value)).toBe(undefined);
    },
  );

  it.each<unknown>([
    'a',
    '123a',
    '        1      ',
    true,
    ['v'],
    { a: 1 },
    [undefined],
    NaN,
    new Date(),
    'undefined',
    'NaN',
    'number',
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isMaybeNumber()(value)).toBe(IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isMaybeNumber({ message: customMessage })(NaN)).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isMaybeNumber({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
