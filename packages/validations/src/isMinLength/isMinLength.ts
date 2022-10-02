import isEmpty from 'lodash.isempty';

import { createRule } from '../createRule';
import { INCORRECT_MESSAGE } from '../constants';

export const getDefaultMessage = (min: number) => `Мин. символов: ${min}`;

/**
 * @description Проверяет минимальную длину value
 * @example isMinLength(10)(1239123);
 * @example isMinLength(10)('1239123');
 * @param {number} [min] Минимальная длина value
 * @param {unknown} [value] проверяемое значение
 */
export const isMinLength = createRule(
  (min: number, message: string = `Мин. символов: ${min}`) =>
    (value?: unknown): string | undefined => {
      if (min < 0) {
        throw new Error('Значение параметра `min` должно быть >= 0');
      }

      if (value === '') {
        return undefined;
      }

      if (typeof value === 'string' || Array.isArray(value)) {
        return value.length < min ? message : undefined;
      }

      if (typeof value !== 'string' || !Array.isArray(value)) {
        return INCORRECT_MESSAGE;
      }

      if (isEmpty(value)) {
        return undefined;
      }

      return undefined;
    },
);
