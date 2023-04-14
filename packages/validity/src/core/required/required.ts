import { createRule } from '../createRule';
import { REQUIRED_ERROR_INFO } from '../errors';

/**
 * @description Проверяет value на пустоту. Если значение пустое, то возвращает ошибку.
 * Правило универсально для всех типов данных
 */
export const required = ({ message }: { message?: string } = {}) =>
  createRule<unknown>((value, ctx) => {
    if (!value) {
      return ctx.createError({
        ...REQUIRED_ERROR_INFO,
        message: message || REQUIRED_ERROR_INFO.message,
      });
    }

    return undefined;
  });
