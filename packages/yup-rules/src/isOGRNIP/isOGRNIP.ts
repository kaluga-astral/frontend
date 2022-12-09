import { isOGRNIP as validateOGRNIP } from '@astral/validations';
import yup from 'yup';

import { yupAdapter } from '../yupAdapter';

/**
 * @description Проверяет валиден ли ОГРНИП
 * @example const scheme = { ogrnip: isOGRNIP().required() };
 */
export const isOGRNIP = yupAdapter<typeof validateOGRNIP, false>(
  yup.string,
  validateOGRNIP,
);
