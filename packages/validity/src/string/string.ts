import {
  STRING_TYPE_ERROR_INFO,
  ValidationGuard,
  ValidationRule,
  ValidationStringType,
  createError,
} from '../core';

export const string =
  <TValues>(
    ...stringRules: ValidationRule<ValidationStringType, TValues>[]
  ): ValidationGuard<TValues> =>
  (value, ctx) => {
    if (typeof value !== 'string') {
      return createError(STRING_TYPE_ERROR_INFO);
    }

    return undefined;
  };
