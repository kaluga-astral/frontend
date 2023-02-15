import { TextField, TextFieldProps } from '@astral/components';
import { useController } from 'react-hook-form';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormTextFieldValue = string;

export type FormTextFieldProps<FieldValues extends object> = WithFormFieldProps<
  TextFieldProps,
  FieldValues
>;

/**
 * @description Адаптер для TextField
 */
export function FormTextField<FieldValues extends object>(
  props: FormTextFieldProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const fieldProps = useFormFieldProps(props, fieldState);

  return <TextField {...field} {...fieldProps} />;
}
