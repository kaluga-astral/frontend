import { Select, SelectProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

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
  const fieldProps = useFormFieldProps(props, fieldState);

  return <Select {...field} {...fieldProps} />;
}
