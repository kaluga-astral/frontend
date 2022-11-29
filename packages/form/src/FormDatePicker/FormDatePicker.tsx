import { DatePicker, DatePickerProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormDatePickerValue = string;

export type FormDatePickerProps<FieldValues extends object> =
  WithFormFieldProps<DatePickerProps, FieldValues>;

/**
 * @description Адаптер для DatePicker
 */
export function FormDatePicker<FieldValues extends object>(
  props: FormDatePickerProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <DatePicker {...field} {...props} {...errorProps} />;
}
