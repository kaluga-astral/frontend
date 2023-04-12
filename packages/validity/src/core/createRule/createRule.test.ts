import { expect } from 'vitest';

import { createError } from '../createError';
import { ValidationStringType } from '../types';

import { createRule } from './createRule';

describe('createRule', () => {
  it('Создает правило валидации, которое возвращает ошибку', () => {
    const rule = createRule<ValidationStringType, {}, false>(
      () => () => createError({ code: Symbol(), message: 'error' }),
    );

    const error = rule()('');

    expect(error?.message).toBe('error');
  });

  it('В правиле доступы все params', () => {
    const rule = createRule<ValidationStringType, { min: number }, true>(
      (params) => () => {
        expect(params).toEqual({ min: 22 });

        return undefined;
      },
    );

    rule({ min: 22 })('');
  });

  it('Если нет контекста, то создается новый', () => {
    const rule = createRule<ValidationStringType, { min: number }, true>(
      () => (_, ctx) => {
        expect(ctx).toEqual({ values: 'value' });

        return undefined;
      },
    );

    rule({ min: 22 })('value');
  });

  it('Params.exclude: пропускает исключения, если exclude возвращает true', () => {
    const rule = createRule<ValidationStringType, {}, false>(
      () => () => createError({ code: Symbol(), message: 'error' }),
    );

    expect(rule({ exclude: () => true })('value')?.message).toBeUndefined();
    expect(rule({ exclude: () => false })('value')?.message).toBe('error');
  });

  it('preprocessCtx: изменяет переданный контекст', () => {
    const rule = createRule<ValidationStringType, {}, false>(
      (_, { preprocessCtx }) => {
        preprocessCtx((prevCtx) => ({ ...prevCtx, isOptional: false }));

        return () => undefined;
      },
    );

    const preprocessCtx = rule().meta?.preprocessCtx;

    expect(preprocessCtx).not.toBeUndefined();

    const resultCtx = preprocessCtx?.({ values: '', isOptional: true });

    expect(resultCtx?.isOptional).toBeFalsy();
  });
});
