import { STRING_RULE_MESSAGE, isString } from './isString';

describe('isString', () => {
  it.each<unknown>(['string', '22s', 'null', '[Object object]'])(
    'Valid for value: %s',
    (value) => {
      expect(isString()(value)).toBe(undefined);
    },
  );

  it.each<unknown>([0, 22, '22', '22.22', '4e4', null, {}, undefined, []])(
    'Invalid for value: %s',
    (value) => {
      expect(isString()(value)).toBe(STRING_RULE_MESSAGE);
    },
  );

  it('Можно прокинуть кастомный текст ошибки', () => {
    const errorMessage = 'test';

    expect(isString(errorMessage)(22)).toBe(errorMessage);
  });
});
