import { TextArea, TextAreaProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFormFieldProps } from '../hooks';
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
  const fieldProps = useFormFieldProps(props, fieldState);

  return <TextArea {...field} {...fieldProps} />;
}
