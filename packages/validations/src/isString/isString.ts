import { createRule } from '../createRule';

export const STRING_RULE_MESSAGE = 'Должно быть строкой';

/**
 * @example isString('Не строка')('string')
 * @description Правило проверяет является ли значение строкой и можно ли эту строку преобразовать в Number.
 */
export const isString = createRule(
  (message: string = STRING_RULE_MESSAGE) =>
    (value) => {
      if (typeof value === 'string') {
        return isNaN(Number(value)) ? undefined : message;
      }

      return message;
    },
);
