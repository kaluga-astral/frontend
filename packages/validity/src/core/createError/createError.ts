import { CreateError, ValidationError } from '../types';

/**
 * @description Создает ошибки валидации
 */
export const createError: CreateError = ({ message, code }) =>
  new ValidationError(message, { cause: { code } });
