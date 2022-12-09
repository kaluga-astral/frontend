import yup, { ValidationError } from 'yup';
import { RuleError } from '@astral/validations';

import { yupAdapter } from './yupAdapter';

describe('yupAdapter', () => {
  type Params = { error: RuleError };

  const rule = (params?: Params) => () => params?.error;
  const yupRule = yupAdapter<typeof rule, false>(yup.string, rule);

  it('Адаптирует правило, которое не возвращает ошибки', () => {
    const validationResult = yupRule().validateSync('value');

    expect(validationResult).toBe('value');
  });

  it('Адаптирует правило, которое возвращает ошибку', () => {
    try {
      yupRule({ error: 'My error' }).validateSync('value');
    } catch (e) {
      expect((e as ValidationError).message).toBe('My error');
    }
  });

  it('Адаптирует правило, которое возвращает массив ошибок', () => {
    try {
      yupRule({ error: ['1', '2'] }).validateSync('value');
    } catch (e) {
      expect((e as ValidationError).message).toBe('2 errors occurred');
    }
  });
});
