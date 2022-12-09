import { isOGRNUL as validateOGRNUL } from '@astral/validations';
import yup from 'yup';

import { yupAdapter } from '../yupAdapter';

/**
 * @description Проверяет валиден ли ОГРНЮЛ
 * @example const scheme = { ogrnul: isOGRNUL().required() };
 */
export const isOGRNUL = yupAdapter<typeof validateOGRNUL, false>(
  yup.string,
  validateOGRNUL,
);
