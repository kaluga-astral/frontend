import {
  PasswordField,
  type PasswordFieldInputProps,
} from '@astral/components';

import { type WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormPasswordFieldProps<FieldValues extends object> =
  WithFormFieldProps<PasswordFieldInputProps, FieldValues>;

/**
 * Адаптер для PasswordField
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
