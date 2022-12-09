import { isINNUL as validateINNUL } from '@astral/validations';
import yup from 'yup';

import { yupAdapter } from '../yupAdapter';

/**
 * @description Проверяет валиден ли ИНН ЮЛ
 * @example const scheme = { innul: isINNUL().required() };
 */
export const isINNUL = yupAdapter<typeof validateINNUL, false>(
  yup.string,
  validateINNUL,
);
