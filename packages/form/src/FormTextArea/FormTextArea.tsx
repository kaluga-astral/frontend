import { TextArea, TextAreaProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormTextAreaValue = string;

export type FormTextAreaProps = WithFormFieldProps<TextAreaProps>;

/**
 * @description Адаптер для TextArea
 */
export function FormTextArea(props: FormTextAreaProps) {
  const fieldProps = useFormFieldProps(props);

  return <TextArea {...fieldProps} />;
}
