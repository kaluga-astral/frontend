import { TextField, TextFieldProps } from '@astral/ui/src';
import { UseControllerProps, useController } from 'react-hook-form';

import { getErrorMessage } from '../utils';

export type FormTextFiledValue = string;

export type FormTextFiledProps<FieldName extends {}> = {
  name: FieldName;
} & Omit<TextFieldProps, 'name'> &
  UseControllerProps<FieldName>;

export function FormTextFiled<FieldName extends {}>(
  props: FormTextFiledProps<FieldName>,
) {
  const { field, fieldState } = useController(props);
  const errorMessages = getErrorMessage(fieldState);
  const hasError = Boolean(errorMessages);

  const statusState = {
    error: hasError,
    helperText: hasError && errorMessages,
  };

  return <TextField {...field} {...props} {...statusState} />;
}
