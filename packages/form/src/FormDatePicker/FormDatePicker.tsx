import { DatePicker, DatePickerProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormDatePickerValue = Date;

export type FormDatePickerProps<FieldValues extends object> =
  WithFormFieldProps<DatePickerProps, FieldValues>;

/**
 * @description DatePicker для формы. Инкапсулирует дефолтную валидацию на валидность даты
 */
export const FormDatePicker = <FieldValues extends object>({
  ...props
}: FormDatePickerProps<FieldValues>) => {
  const fieldProps = useFormFieldProps<
    FormDatePickerProps<FieldValues>,
    FieldValues
  >({
    ...props,
  });

  const { error, helperText, ...fieldPropsWithoutErrorProps } = fieldProps;

  const { name, onBlur, onChange, ref, value, ...datePickerProps } =
    fieldPropsWithoutErrorProps;

  return (
    <DatePicker
      {...fieldPropsWithoutErrorProps}
      inputProps={{ ...datePickerProps.inputProps, error, helperText }}
    />
  );
};
