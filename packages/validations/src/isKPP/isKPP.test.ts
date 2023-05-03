import { IS_KPP_DEFAULT_MESSAGE, isKPP } from './isKPP';

describe('isKPP', () => {
  it.each<unknown>(['249443332', '082645444', '0826AD444', '0826ZE444', ''])(
    'Valid for: %s',
    (value) => {
      expect(isKPP()(value)).toBe(undefined);
    },
  );

  it('Возвращает ошибку, если КПП состоит целиком из нулей', () => {
    expect(isKPP()('000000000')).toBe(IS_KPP_DEFAULT_MESSAGE);
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
    '95145370511',
    '156-573-259 92',
    1175958000004,
    95145370513,
  ])('Invalid for: %s', (value) => {
    expect(isKPP()(value)).toBe(IS_KPP_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isKPP({ message: customMessage })('q')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isKPP({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
