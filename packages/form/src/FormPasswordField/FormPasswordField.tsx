import { PasswordField, PasswordFieldInputProps } from '@astral/components';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormPasswordFieldProps<FieldValues extends object> =
  WithFormFieldProps<PasswordFieldInputProps, FieldValues>;

/**
 * @description Адаптер для PasswordField
 */
export const FormPasswordField = <FieldValues extends object>(
  props: FormPasswordFieldProps<FieldValues>,
) => {
  const fieldProps = useFormFieldProps<
    FormPasswordFieldProps<FieldValues>,
    FieldValues
  >(props);

  return <PasswordField {...fieldProps} />;
};
