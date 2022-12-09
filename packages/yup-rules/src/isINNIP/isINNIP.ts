import { isINNIP as validateINNIP } from '@astral/validations';
import yup from 'yup';

import { yupAdapter } from '../yupAdapter';

/**
 * @description Проверяет валиден ли ИНН ИП
 * @example const scheme = { innip: isINNIP().required() };
 */
export const isINNIP = yupAdapter<typeof validateINNIP, false>(
  yup.string,
  validateINNIP,
);
