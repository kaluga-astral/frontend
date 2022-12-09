import yup, { ValidationError } from 'yup';
import { RuleError } from '@astral/validations';

import { yupAdapter } from './yupAdapter';

describe('yupAdapter', () => {
  type Params = { error: RuleError };

  const rule = (params?: Params) => () => params?.error;
  const yupRule = yupAdapter<typeof rule, false>(yup.string, rule);

  it('Адаптирует правило, которое не возвращает ошибки', () => {
    const validationResult = yup
      .object({ inn: yupRule() })
      .validateSync({ inn: 'value' });

    expect(validationResult).toEqual({ inn: 'value' });
  });

  it('Адаптирует правило, которое возвращает ошибку', () => {
    try {
      yup
        .object({ inn: yupRule({ error: 'My error' }) })
        .validateSync({ inn: 'value' });
    } catch (e) {
      const error = e as ValidationError;

      expect(error.path).toBe('inn');
      expect(error.errors).toEqual(['My error']);
      expect(error.message).toBe('My error');
    }
  });

  it('Адаптирует правило, которое возвращает массив ошибок', () => {
    try {
      yup
        .object({ inn: yupRule({ error: ['1', '2'] }) })
        .validateSync({ inn: 'value' });
    } catch (e) {
      const error = e as ValidationError;

      expect(error.path).toBe('inn');
      expect(error.errors).toEqual(['1', '2']);
    }
  });
});
