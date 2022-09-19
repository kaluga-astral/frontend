import { TextField, TextFieldProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormTextFieldValue = string;

export type FormTextFieldProps<FieldValues extends object> = WithFormFieldProps<
  TextFieldProps,
  FieldValues
>;

export function FormTextField<FieldValues extends object>(
  props: FormTextFieldProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <TextField {...field} {...props} {...errorProps} />;
}
