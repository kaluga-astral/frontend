import { isMobilePhone as validateMobilePhone } from '@astral/validations';
import yup from 'yup';

import { yupAdapter } from '../yupAdapter';

/**
 * @description Проверяет валиден ли мобильный телефон. Должен быть вида 79998882233
 * @example const scheme = { phone: isMobilePhone().required() };
 */
export const isMobilePhone = yupAdapter<typeof validateMobilePhone, false>(
  yup.string,
  validateMobilePhone,
);
