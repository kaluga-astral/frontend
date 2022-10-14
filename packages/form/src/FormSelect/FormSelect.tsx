import { Select, SelectProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { WithFormFieldProps } from '../types';
import { useFieldErrorProps } from '../hooks';

export type FormSelectProps<FieldValues extends object> = WithFormFieldProps<
  SelectProps,
  FieldValues
>;

/**
 * @description Адаптер для Select
 */
export function FormSelect<FieldValues extends object>(
  props: FormSelectProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <Select {...field} {...props} {...errorProps} />;
}
