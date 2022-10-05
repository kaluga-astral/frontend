import { IS_OGRNIP_DEFAULT_MESSAGE, isOGRNIP } from './isOGRNIP';

describe('isOGRNIP', () => {
  it.each<unknown>(['316682000089619', ''])('Valid for: %s', (value) => {
    expect(isOGRNIP()(value)).toBe(undefined);
  });

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
    '1175958036814',
    '1-22-33-44-5555555-6',
    1175958000004,
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isOGRNIP()(value)).toBe(IS_OGRNIP_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isOGRNIP({ message: customMessage })('q')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isOGRNIP({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
