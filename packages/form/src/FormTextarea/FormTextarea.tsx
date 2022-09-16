import { TextArea, TextAreaProps } from '@astral/ui';
import { UseControllerProps, useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';

export type FormTextareaValue = string;

export type FormTextareaProps<FieldName extends {}> = {
  name: FieldName;
} & Omit<TextAreaProps, 'name'> &
  UseControllerProps<FieldName>;

export function FormTextarea<FieldName extends {}>(
  props: FormTextareaProps<FieldName>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextArea {...field} {...props} {...errorProps} />;
}
