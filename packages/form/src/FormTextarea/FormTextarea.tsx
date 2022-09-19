import { TextArea, TextAreaProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormTextareaValue = string;

export type FormTextareaProps<FieldValues extends object> = WithFormFieldProps<
  TextAreaProps,
  FieldValues
>;

export function FormTextarea<FieldValues extends object>(
  props: FormTextareaProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextArea {...field} {...props} {...errorProps} />;
}
