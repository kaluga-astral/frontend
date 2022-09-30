import { IS_OGRNIP_DEFAULT_MESSAGE, isOGRNIP } from './isOGRNIP';

describe('isOGRNIP', () => {
  it.each<unknown>(['316682000089619'])('Valid for: %s', (value) => {
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
    1175958000004,
  ])('Invalid for: %s', (value) => {
    expect(isOGRNIP()(value)).toBe(IS_OGRNIP_DEFAULT_MESSAGE);
  });
});
