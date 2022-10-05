import { IS_OGRNUL_DEFAULT_MESSAGE, isOGRNUL } from './isOGRNUL';

describe('isOGRNUL', () => {
  it.each<unknown>(['8104338364837', '1214000000092', ''])(
    'Valid for: %s',
    (value) => {
      expect(isOGRNUL()(value)).toBe(undefined);
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
    '1175958000004',
    '1-22-33-5555555-6',
    1175958000004,
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isOGRNUL()(value)).toBe(IS_OGRNUL_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isOGRNUL({ message: customMessage })('q')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isOGRNUL({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
