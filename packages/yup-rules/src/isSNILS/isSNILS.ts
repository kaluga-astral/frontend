import { isSNILS as validateSNILS } from '@astral/validations';
import yup from 'yup';

import { yupAdapter } from '../yupAdapter';

/**
 * @description Проверяет валиден ли СНИЛС
 * @example const scheme = { snils: isSNILS().required() };
 */
export const isSNILS = yupAdapter<typeof validateSNILS, false>(
  yup.string,
  validateSNILS,
);
