import { TextField, TextFieldProps } from '@astral/ui';
import { UseControllerProps, useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';

export type FormTextFieldValue = string;

export type FormTextFieldProps<FieldName extends {}> = {
  name: FieldName;
} & Omit<TextFieldProps, 'name'> &
  UseControllerProps<FieldName>;

export function FormTextField<FieldName extends {}>(
  props: FormTextFieldProps<FieldName>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextField {...field} {...props} {...errorProps} />;
}
