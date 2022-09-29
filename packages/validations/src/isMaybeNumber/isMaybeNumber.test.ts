import {
  IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE,
  isMaybeNumber,
} from './isMaybeNumber';

describe('isMaybeNumber', () => {
  it.each<unknown>([-1, '-44', '-0.12'])('Valid for: %s', (value) => {
    expect(isMaybeNumber()(value)).toBe(undefined);
  });

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
  ])('Invalid for: %s', (value) => {
    expect(isMaybeNumber()(value)).toBe(IS_MAYBE_NUMBER_RULE_DEFAULT_MESSAGE);
  });
});
