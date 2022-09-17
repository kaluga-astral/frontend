import { flowAll } from './flowAll';

describe('flowAll', () => {
  it('Возвращает все ошибки, которые появляется при выполнении правил', () => {
    const validate = flowAll(
      () => 'error1',
      () => 'error2',
    );

    expect(validate(null)).toEqual(['error1', 'error2']);
  });

  it('Делает многомерные массивы ошибок плоскими', () => {
    const validate = flowAll(
      () => ['error1', 'error2'],
      () => 'error3',
    );

    expect(validate(null)).toEqual(['error1', 'error2', 'error3']);
  });

  it('Не добавляет в результирующий массив ошибок undefined', () => {
    const validate = flowAll(
      () => ['error1', 'error2'],
      () => undefined,
      () => 'error3',
    );

    expect(validate(null)).toEqual(['error1', 'error2', 'error3']);
  });

  it('Возвращает undefined, если нет ошибок', () => {
    const validate = flowAll(
      () => undefined,
      () => undefined,
    );

    expect(validate(null)).toBe(undefined);
  });

  it('Если итоговая ошибка одна, то она возвращается без массива', () => {
    const validate = flowAll(
      () => undefined,
      () => 'error',
    );

    expect(validate(null)).toBe('error');
  });

  it('Поддерживает вложенность', () => {
    const validate = flowAll(
      () => ['error1', 'error2'],
      flowAll(() => ['error3', 'error4']),
    );

    expect(validate(null)).toEqual(['error1', 'error2', 'error3', 'error4']);
  });
});
