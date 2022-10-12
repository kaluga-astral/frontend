import {
  IS_MOBILE_PHONE_DEFAULT_MESSAGE,
  isMobilePhone,
} from './isMobilePhone';

describe('isMobilePhone', () => {
  it.each<unknown>(['79999999999', ''])('Valid for: %s', (value) => {
    expect(isMobilePhone()(value)).toBe(undefined);
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
    '89999999999',
    '78999999999',
    '7999999999',
    79999999999,
    '+79999999999',
    '7(999)9999999',
    '7 (999) 99-99-999',
    '7 (999) 999-99-99',
    '7(999)999-99-99',
    1175958000004,
    null,
    undefined,
  ])('Invalid for: %s', (value) => {
    expect(isMobilePhone()(value)).toBe(IS_MOBILE_PHONE_DEFAULT_MESSAGE);
  });

  it('Valid custom message', () => {
    const customMessage = 'CustomMessage';

    expect(isMobilePhone({ message: customMessage })('q')).toBe(customMessage);
  });

  it('Valid exclude value', () => {
    const isExclude = (value: unknown) => {
      const excluded: unknown[] = ['exclude'];

      return excluded.includes(value);
    };

    expect(isMobilePhone({ exclude: isExclude })('exclude')).toBe(undefined);
  });
});
