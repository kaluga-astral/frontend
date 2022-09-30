import { IS_OGRNUL_DEFAULT_MESSAGE, isOGRNUL } from './isOGRNUL';

describe('isOGRNUL', () => {
  it.each<unknown>(['1175958036814', '1214000000092'])(
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
    1175958000004,
  ])('Invalid for: %s', (value) => {
    expect(isOGRNUL()(value)).toBe(IS_OGRNUL_DEFAULT_MESSAGE);
  });
});
