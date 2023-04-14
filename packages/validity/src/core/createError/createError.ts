import { CreateError, ValidationError } from '../types';

export const createError: CreateError = ({ message, code }) =>
  new ValidationError(message, { cause: { code } });
