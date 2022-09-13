import { TextArea, TextAreaProps } from '@astral/ui/src';
import { UseControllerProps, useController } from 'react-hook-form';

import { getErrorMessage } from '../utils';

export type FormTextareaValue = string;

export type FormTextareaProps<FieldName extends {}> = {
  name: FieldName;
} & Omit<TextAreaProps, 'name'> &
  UseControllerProps<FieldName>;

export function FormTextarea<FieldName extends {}>(
  props: FormTextareaProps<FieldName>,
) {
  const { field, fieldState } = useController(props);
  const errorMessages = getErrorMessage(fieldState);
  const hasError = Boolean(errorMessages);

  const statusState = {
    error: hasError,
    helperText: hasError && errorMessages,
  };

  return <TextArea {...field} {...props} {...statusState} />;
}
