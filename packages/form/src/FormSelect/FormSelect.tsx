import { Select, SelectProps } from '@astral/components';
import { useController } from 'react-hook-form';

import { WithFormFieldProps } from '../types';
import { useFormFieldErrorProps } from '../hooks';

export type FormSelectProps<FieldValues extends object> = WithFormFieldProps<
  SelectProps<unknown>,
  FieldValues
>;

/**
 * @description Адаптер для Select
 */
export function FormSelect<FieldValues extends object>(
  props: FormSelectProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  return <Select {...field} {...props} {...errorProps} />;
}
