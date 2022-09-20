import { composeToString } from './composeToString';

describe('composeToString', () => {
  it('Если появляется массив ошибок, то возвращается первая из массива', () => {
    const validate = composeToString(
      () => undefined,
      () => ['error1', 'error2'],
    );

    expect(validate(null)).toBe('error1');
  });

  it('Поддерживает вложенность', () => {
    const validate = composeToString(
      composeToString(() => ['error3', 'error4']),
      () => ['error1', 'error2'],
    );

    expect(validate(null)).toBe('error3');
  });
});
