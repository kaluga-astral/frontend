import { ValidationContext, ValidationResult, ValidationRule } from '../types';
import { required } from '../required';
import { createContext } from '../createContext';

type CheckType = (value: unknown) => ValidationResult;

/**
 * @description Фабрика для создания guard (правила, проверяющие тип value)
 * По дефолту проверяет поле на required
 */
export const createGuard =
  <ValidationType>(checkType: CheckType) =>
  (...rules: ValidationRule<ValidationType, unknown>[]) =>
  (value: unknown, ctx?: ValidationContext<unknown>): ValidationResult => {
    // контекст создается, если он не был создан раннее
    const currentCtx = createContext(ctx, value);

    const typeError = checkType(value);

    if (!typeError) {
      // добавляет required в список валидаций
      return [required, ...rules][0](value as ValidationType, currentCtx);
    }

    return typeError;
  };
