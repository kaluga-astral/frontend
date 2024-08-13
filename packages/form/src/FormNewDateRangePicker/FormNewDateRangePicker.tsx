import {
  type NewDateItemProps,
  NewDateRangePicker,
  type NewDateRangePickerProps,
  type NewDateRangePickerValue,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

/**
 * Тип значения, которое сетится в state формы
 */
export type FormDateRangePickerValue = NewDateRangePickerValue;

export type FormDateRangePickerProps<FieldValues extends object> =
  WithFormFieldProps<
    Omit<NewDateRangePickerProps, 'startDateProps' | 'endDateProps'>,
    FieldValues
  > & {
    startDateProps: NewDateItemProps;
    endDateProps: NewDateItemProps;
  };

/**
 * NewDateRangePicker для формы. Инкапсулирует дефолтную валидацию на валидность даты
 */
export const FormNewDateRangePicker = <FieldValues extends object>({
  startDateProps,
  endDateProps,
  ...props
}: FormDateRangePickerProps<FieldValues>) => {
  const { error, ...fieldProps } = useFormFieldProps<
    NewDateItemProps,
    FieldValues
  >(props);

  return (
    <NewDateRangePicker
      isError={error}
      startDateProps={startDateProps}
      endDateProps={endDateProps}
      {...fieldProps}
    />
  );
};
