import { Select, SelectProps } from '@astral/components';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormSelectProps = WithFormFieldProps<SelectProps<unknown>>;

/**
 * @description Адаптер для Select
 */
export function FormSelect(props: FormSelectProps) {
  const fieldProps = useFormFieldProps(props);

  return <Select {...fieldProps} />;
}
