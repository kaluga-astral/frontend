import { ValidationContext, ValidationTypes } from '../types';
import { createError } from '../createError';

/**
 * @description Создает context валидации
 * Если не было предыдущего контекста, то создает новый. При этом в values записывает текщее валидируемое значение. Это означает, что в ctx.values попадает value самого верхнего guard или rule
 * При создании контекста устанавливает isOptional в true для того, чтобы по-дефолту все правило были required
 */
export function createContext<Value extends ValidationTypes>(
  prevCtx: ValidationContext<Value> | undefined,
  value: Value,
): ValidationContext<Value>;

export function createContext<Value extends ValidationTypes, Values>(
  prevCtx: ValidationContext<Values> | undefined,
  value: Value,
): ValidationContext<Values>;

export function createContext<Value extends ValidationTypes, Values>(
  prevCtx: ValidationContext<Values> | undefined,
  value: Value,
): ValidationContext<Values | Value> {
  if (prevCtx) {
    return prevCtx;
  }

  return { values: value, isOptional: true, createError };
}
