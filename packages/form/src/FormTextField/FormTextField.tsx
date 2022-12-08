import { TextField, TextFieldProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { useInputProps } from '../hooks';
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
  const inputProps = useInputProps(props);
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextField {...field} {...inputProps} {...errorProps} />;
}
