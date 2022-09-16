import { InitializedRule, RuleError } from '../types';

type ComposeRulesResult = string | undefined;

const formatRuleErrorToString = (error: RuleError): string => {
  if (typeof error === 'string') {
    return error;
  }

  return error[0].message;
};

/**
 * @example composeRules(isEmail(), isRequired());
 * @description Объеденяет переданные правила в цепочку правил, останавливает выполнение цепочки, если появилась ошибка. Выполняет правила слева направо
 */
export const composeRules =
  (...rules: InitializedRule[]) =>
  (value: unknown): ComposeRulesResult =>
    rules.reduce<ComposeRulesResult>((result, rule) => {
      if (result) {
        return result;
      }

      const error = rule(value);

      return error ? formatRuleErrorToString(error) : undefined;
    }, undefined);
