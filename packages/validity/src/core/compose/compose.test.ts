import { createError } from '../createError';

import { compose } from './compose';

describe('compose', () => {
  it('Выполняет правила слева направо', () => {
    const validate = compose(
      () => createError({ code: Symbol(), message: 'error1' }),
      () => createError({ code: Symbol(), message: 'error1' }),
    );

    expect(validate(null)?.message).toBe('error1');
  });

  it('Поддерживается вложенность', () => {
    const composed1 = compose(
      () => createError({ code: Symbol(), message: 'error1' }),
      () => createError({ code: Symbol(), message: 'error1' }),
    );
    const validate = compose(() => undefined, composed1);

    expect(validate(null)?.message).toBe('error1');
  });
});
