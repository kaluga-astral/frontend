import { Select, SelectProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { WithFormFieldProps } from '../types';
import { useFieldErrorProps } from '../hooks';

export type FormSelectFieldProps<FieldValues extends object> =
  WithFormFieldProps<SelectProps, FieldValues>;

/**
 * @description Адаптер для Select
 */
export function FormSelectField<FieldValues extends object>(
  props: FormSelectFieldProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <Select {...field} {...props} {...errorProps} />;
}
