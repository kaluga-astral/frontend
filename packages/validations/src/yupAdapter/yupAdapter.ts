import { InitializedRule } from '../types';

type YupValidationResult = boolean | string | string[];

/**
 * @description Адаптирует правило созданное createRule к интерфейсу yup
 * @example yupAdapter(isMinLength(22))('word')
 */
export const yupAdapter =
  (rule: InitializedRule) =>
  (value: unknown): YupValidationResult => {
    const error = rule(value);

    if (!error) {
      return false;
    }

    return error;
  };
