import { flowToString } from './flowToString';

describe('flowToString', () => {
  it('Если появляется массив ошибок, то возвращается первая из массива', () => {
    const validate = flowToString(
      () => undefined,
      () => ['error1', 'error2'],
    );

    expect(validate(null)).toBe('error1');
  });

  it('Поддерживает вложенность', () => {
    const validate = flowToString(
      flowToString(() => ['error3', 'error4']),
      () => ['error1', 'error2'],
    );

    expect(validate(null)).toBe('error3');
  });
});
