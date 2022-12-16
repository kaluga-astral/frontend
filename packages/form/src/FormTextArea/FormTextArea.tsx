import { TextArea, TextAreaProps } from '@astral/components';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormTextAreaValue = string;

export type FormTextAreaProps<FieldValues extends object> = WithFormFieldProps<
  TextAreaProps,
  FieldValues
>;

/**
 * @description Адаптер для TextArea
 */
export function FormTextArea<FieldValues extends object>(
  props: FormTextAreaProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextArea {...field} {...props} {...errorProps} />;
}
