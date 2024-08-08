import { Select, type SelectProps } from '@astral/components';

import { type WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormSelectProps<FieldValues extends object> = WithFormFieldProps<
  SelectProps<unknown>,
  FieldValues
>;

/**
 * Адаптер для Select
 */
export const FormSelect = <FieldValues extends object>(
  props: FormSelectProps<FieldValues>,
) => {
  const fieldProps = useFormFieldProps<
    FormSelectProps<FieldValues>,
    FieldValues
  >(props);

  return <Select {...fieldProps} />;
};
