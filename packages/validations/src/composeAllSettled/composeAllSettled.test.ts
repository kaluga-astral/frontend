import { composeAllSettled } from './composeAllSettled';

describe('composeAllSettled', () => {
  it('Возвращает все ошибки, которые появляется при выполнении правил', () => {
    const validate = composeAllSettled(
      () => 'error1',
      () => 'error2',
    );

    expect(validate(null)).toEqual(['error1', 'error2']);
  });

  it('Делает многомерные массивы ошибок плоскими', () => {
    const validate = composeAllSettled(
      () => ['error1', 'error2'],
      () => 'error3',
    );

    expect(validate(null)).toEqual(['error1', 'error2', 'error3']);
  });

  it('Не добавляет в результирующий массив ошибок undefined', () => {
    const validate = composeAllSettled(
      () => ['error1', 'error2'],
      () => undefined,
      () => 'error3',
    );

    expect(validate(null)).toEqual(['error1', 'error2', 'error3']);
  });

  it('Возвращает undefined, если нет ошибок', () => {
    const validate = composeAllSettled(
      () => undefined,
      () => undefined,
    );

    expect(validate(null)).toBe(undefined);
  });

  it('Если итоговая ошибка одна, то она возвращается без массива', () => {
    const validate = composeAllSettled(
      () => undefined,
      () => 'error',
    );

    expect(validate(null)).toBe('error');
  });

  it('Поддерживает вложенность', () => {
    const validate = composeAllSettled(
      () => ['error1', 'error2'],
      composeAllSettled(() => ['error3', 'error4']),
    );

    expect(validate(null)).toEqual(['error1', 'error2', 'error3', 'error4']);
  });
});
