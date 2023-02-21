import { DatePicker, DatePickerProps } from '@astral/components';
import { InitializedRule, compose, isDate } from '@astral/validations';
import { useMemo } from 'react';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

const DEFAULT_VALIDATE = () => undefined;

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
  rules,
  ...props
}: FormDatePickerProps<FieldValues>) => {
  const validationRules = useMemo(() => {
    const validate = rules?.validate || DEFAULT_VALIDATE;

    return {
      ...rules,
      validate: compose(isDate(), validate as InitializedRule),
    };
  }, [rules]);

  const fieldProps = useFormFieldProps<
    FormDatePickerProps<FieldValues>,
    FieldValues
  >({
    ...props,
    rules: validationRules,
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
