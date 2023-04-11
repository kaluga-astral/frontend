import {
  OBJECT_TYPE_ERROR_INFO,
  ValidationContext,
  ValidationError,
  ValidationObjectType,
  ValidationRule,
  createError,
} from '../core';

type ObjectSchema<TValues extends object> = Record<
  keyof TValues,
  // Может принимать любые правила валидаций
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ValidationRule<any, TValues>
>;

export const object =
  <TValues extends object>(schema: ObjectSchema<TValues>) =>
  (
    value: unknown,
    ctx: ValidationContext<TValues>,
  ): ValidationError | undefined => {
    if (typeof value !== 'object' || Array.isArray(value)) {
      return createError(OBJECT_TYPE_ERROR_INFO);
    }

    return undefined;
  };
