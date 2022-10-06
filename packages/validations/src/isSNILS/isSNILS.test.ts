import { IS_SNILS_DEFAULT_MESSAGE, isSNILS } from './isSNILS';

describe('isSNILS', () => {
  it.each<unknown>(['15657325992', '95145370513', ''])(
    'Valid for: %s',
    (value) => {
      expect(isSNILS()(value)).toBe(undefined);
    },
  );

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
    '95145370511',
    '156-573-259 92',
    1175958000004,
    95145370513,
  ])('Invalid for: %s', (value) => {
    expect(isSNILS()(value)).toBe(IS_SNILS_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isSNILS({ message: customMessage })('q')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isSNILS({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
