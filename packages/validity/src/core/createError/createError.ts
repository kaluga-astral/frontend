import { ErrorInfo, ValidationError } from '../types';

export const createError = ({ message, code }: ErrorInfo) =>
  new ValidationError(message, { cause: { code } });
