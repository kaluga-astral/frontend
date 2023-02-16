import { IS_INNIP_DEFAULT_MESSAGE, isINNIP } from './isINNIP';

describe('isINNIP', () => {
  it.each<unknown>(['384212952720', ''])('Valid for: %s', (value) => {
    expect(isINNIP()(value)).toBe(undefined);
  });

  it('Возвращает ошибку, если ИНН ИП состоит целиком из нулей', () => {
    expect(isINNIP()('000000000000')).toBe(IS_INNIP_DEFAULT_MESSAGE);
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
    '3842129527',
    '384212952a20',
    384212952720,
    '+384212952720',
    '7728168911',
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isINNIP()(value)).toBe(IS_INNIP_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isINNIP({ message: customMessage })('213')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isINNIP({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
