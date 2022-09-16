import { createRule } from '../createRule';

export const STRING_RULE_MESSAGE = 'Должно быть строкой';

/**
 * @example isString('Не строка')('string')
 * @description Правило проверки на строку.
 */
export const isString = createRule(
  (message: string = STRING_RULE_MESSAGE) =>
    (value) =>
      typeof value === 'string' ? undefined : message,
);
