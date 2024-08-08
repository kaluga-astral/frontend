import {
  type DateItemProps,
  DateRangePicker,
  type DateRangePickerProps,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

/**
 * Тип значения, которое сетится в state формы
 */
export type FormDateRangePickerValue = Date;

export type FormDateRangePickerProps<FieldValues extends object> = Omit<
  DateRangePickerProps,
  'startDateProps' | 'endDateProps'
> & {
  /**
   * пропсы для управления датой слева
   */
  startDateProps: WithFormFieldProps<DateItemProps, FieldValues>;

  /**
   * пропсы для управления датой справа
   */
  endDateProps: WithFormFieldProps<DateItemProps, FieldValues>;
};

/**
 * DateRangePicker для формы. Инкапсулирует дефолтную валидацию на валидность даты
 */
export const FormDateRangePicker = <FieldValues extends object>({
  startDateProps,
  endDateProps,
  ...props
}: FormDateRangePickerProps<FieldValues>) => {
  const startDateFieldProps = useFormFieldProps<DateItemProps, FieldValues>(
    startDateProps,
  );

  const endDateFieldProps = useFormFieldProps<DateItemProps, FieldValues>(
    endDateProps,
  );

  const { error: startDateError, helperText: startDateHelperText } =
    startDateFieldProps;

  const { error: endDateError, helperText: endDateErrorText } =
    endDateFieldProps;

  return (
    <DateRangePicker
      {...props}
      startDateProps={{
        ...startDateFieldProps,
        inputProps: {
          ...startDateProps.inputProps,
          error: startDateError,
          helperText: startDateHelperText,
        },
      }}
      endDateProps={{
        ...endDateFieldProps,
        inputProps: {
          ...endDateProps.inputProps,
          error: endDateError,
          helperText: endDateErrorText,
        },
      }}
    />
  );
};
