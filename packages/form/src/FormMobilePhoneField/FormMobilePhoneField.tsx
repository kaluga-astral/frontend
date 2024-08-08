import { MaskField, type MaskFieldProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

const MOBILE_PHONE_MASK = '+{7} (000) 000-00-00';

export type FormMobilePhoneFieldProps<FieldValues extends object> =
  WithFormFieldProps<Omit<MaskFieldProps, 'mask'>, FieldValues>;

/**
 * Поле для ввода личного мобильного номера телефона, начинающего на 79
 */
export const FormMobilePhoneField = <FieldValues extends object>({
  ...props
}: FormMobilePhoneFieldProps<FieldValues>) => {
  const fieldProps = useFormFieldProps<
    FormMobilePhoneFieldProps<FieldValues>,
    FieldValues
  >({
    ...props,
  });

  return (
    <MaskField
      placeholder="+7 (9**) ***-**-**"
      {...fieldProps}
      mask={MOBILE_PHONE_MASK}
      autoComplete="tel"
    />
  );
};
