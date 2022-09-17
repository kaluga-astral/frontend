import { flow } from './flow';

describe('flow', () => {
  it('Выполняет правила слева направо', () => {
    const composed = flow(
      () => 'error1',
      () => 'error2',
    );

    expect(composed(null)).toBe('error1');
  });

  it('Поддерживается вложенность', () => {
    const composed1 = flow(
      () => 'error1',
      () => 'error2',
    );
    const composed2 = flow(() => undefined, composed1);

    expect(composed2(null)).toBe('error1');
  });
});
