import { IS_INNUL_DEFAULT_MESSAGE, isINNUL } from './isINNUL';

describe('isINNUL', () => {
  it.each<unknown>(['7728168971', ''])('Valid for: %s', (value) => {
    expect(isINNUL()(value)).toBe(undefined);
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
    '384212952720',
    '7728168911',
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isINNUL()(value)).toBe(IS_INNUL_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isINNUL({ message: customMessage })('213')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isINNUL({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
