import { InitializedRule } from '../types';
import { createRule } from '../createRule';

/**
 * @description Объеденяет переданные правила в цепочку правил, выполняя все переданные правила, независимо от результата выполнения правил. Выполняет правила слева направо.
 * @example flowAll(isIncludeDot(), isIncludeComma());
 * @example flow(isRequired(), flowAll(isIncludeDot(), isIncludeComma()));
 */
export const flowAll = createRule((...rules: InitializedRule[]) => (value) => {
  const errors: string[] = [];

  rules.forEach((rule) => {
    const error = rule(value);

    if (Array.isArray(error)) {
      errors.push(...error);
    }

    if (typeof error === 'string') {
      errors.push(error);
    }
  });

  if (!errors.length) {
    return undefined;
  }

  return errors.length === 1 ? errors[0] : errors;
});
