import { ValidationAnyType, ValidationRule, createContext } from '../core';

/**
 * @description Позволяет выключить проверку на required в guard
 * @example object({ name: optional(string(min({ min: 22 }))) })
 */
export const optional =
  (
    rule: ValidationRule<ValidationAnyType, unknown>,
  ): ValidationRule<ValidationAnyType, unknown> =>
  (value, ctx) => {
    const currentCtx = createContext(ctx, value);

    currentCtx.isOptional = true;

    return rule(value, ctx);
  };
