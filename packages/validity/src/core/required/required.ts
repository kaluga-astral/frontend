import { ValidationRule } from '../types';
import { createError } from '../createError';
import { REQUIRED_ERROR_INFO } from '../errors';

/**
 * @description Правило для проверки значение на required
 */
export const required: ValidationRule<unknown, unknown> = (value) => {
  if (!value) {
    return createError(REQUIRED_ERROR_INFO);
  }

  return undefined;
};
