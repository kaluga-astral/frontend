import { compose } from './compose';

describe('compose', () => {
  it('Выполняет правила слева направо', () => {
    const validate = compose(
      () => 'error1',
      () => 'error2',
    );

    expect(validate(null)).toBe('error1');
  });

  it('Поддерживается вложенность', () => {
    const composed1 = compose(
      () => 'error1',
      () => 'error2',
    );
    const validate = compose(() => undefined, composed1);

    expect(validate(null)).toBe('error1');
  });
});
