import { composeRules } from './composeRules';

describe('composeRules', () => {
  it('Выполняет правила слева направо', () => {
    const composed = composeRules(
      () => 'error1',
      () => 'error2',
    );

    expect(composed(null)).toBe('error1');
  });

  it('Поддерживается вложенность', () => {
    const composed1 = composeRules(
      () => 'error1',
      () => 'error2',
    );
    const composed2 = composeRules(() => undefined, composed1);

    expect(composed2(null)).toBe('error1');
  });

  it('Форматирует массивы ошибок в строку', () => {
    const composed = composeRules(
      () => undefined,
      () => [
        { reason: 'dot', message: 'dot invalid' },
        { reason: 'comma', message: 'comma invalid' },
      ],
    );

    expect(composed(null)).toBe('dot invalid');
  });
});
