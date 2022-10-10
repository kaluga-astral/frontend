import { IS_DATE_RULE_DEFAULT_MESSAGE, isDate } from './isDate';

describe('isDate', () => {
  it.each<unknown>([
    'a',
    0,
    1,
    true,
    ['v'],
    { a: 1 },
    [undefined],
    NaN,
    '2011-22-12',
    '1991.22.22',
    'Invalid Date',
    new Date('a'),
  ])('Invalid for: %s', (value) => {
    expect(isDate()(value)).toBe(IS_DATE_RULE_DEFAULT_MESSAGE);
  });

  it.each<unknown>(['2011-11-12', '1991.01.22', '01.12.2022', new Date(), ''])(
    'Valid for: %s',
    (value) => {
      expect(isDate()(value)).toBe(undefined);
    },
  );

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isDate({ message: customMessage })('q')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isDate({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
