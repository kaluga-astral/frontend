import { RuleError } from '../types';

import { yupAdapter } from './yupAdapter';

describe('yupAdapter', () => {
  const rule = (error?: RuleError) => () => error;

  it('Возвращает false, если нет ошибки валидации', () => {
    const yupRule = yupAdapter(rule());

    expect(yupRule(null)).toBe(false);
  });

  it('Возвращает исходную ошибку, если был не массив ошибок', () => {
    const yupRule = yupAdapter(rule('dot invalid'));

    expect(yupRule(null)).toBe('dot invalid');
  });
});
