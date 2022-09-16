import { TextField, TextFieldProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

export type FormTextFieldValue = string;

export type FormTextFieldProps<FieldValues extends object> = WithFormFieldProps<
  Omit<TextFieldProps, 'name'>,
  FieldValues
>;

export function FormTextField<FieldValues extends object>(
  props: FormTextFieldProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextField {...field} {...props} {...errorProps} />;
}
