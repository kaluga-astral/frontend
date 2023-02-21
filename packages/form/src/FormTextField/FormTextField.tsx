import { TextField, TextFieldProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { FieldValues, WithFormFieldProps } from '../types';

export type FormTextFieldProps<TFieldValues extends FieldValues> =
  WithFormFieldProps<TextFieldProps, TFieldValues>;

/**
 * @description Адаптер для TextField
 */
export function FormTextField<TFieldValues extends FieldValues>(
  props: FormTextFieldProps<TFieldValues>,
) {
  const fieldProps = useFormFieldProps<
    FormTextFieldProps<TFieldValues>,
    TFieldValues
  >(props);

  return <TextField {...fieldProps} />;
}
