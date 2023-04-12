import { getShortFullName } from './getShortFullName';

describe('getShortFullName', () => {
  const NAME = 'Тестов Тест Тестович';
  const SHORT_NAME = 'Тестов Т.Т.';

  it('Выполнение метода getShortFullName', () => {
    const result = getShortFullName(NAME);

    expect(result).toBe(SHORT_NAME);
  });
});
