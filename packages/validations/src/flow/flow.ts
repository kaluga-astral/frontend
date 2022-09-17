import { InitializedRule, ValidationResult } from '../types';
import { createRule } from '../createRule';

/**
 * @description Объеденяет переданные правила в цепочку правил, останавливает выполнение цепочки, если появилась ошибка. Выполняет правила слева направо
 * @example flow(isRequired(), isEmail());
 * @example flow(isRequired(), flow(isIncludeDot(), isIncludeComma()));
 */
export const flow = createRule(
  (...rules: InitializedRule[]) =>
    (value) =>
      rules.reduce<ValidationResult>(
        (result, rule) => result || rule(value),
        undefined,
      ),
);
