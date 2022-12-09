import { DatePicker, DatePickerProps } from '@astral/ui';
import { InitializedRule, compose, isDate } from '@astral/validations';
import { useController } from 'react-hook-form';
import { useMemo } from 'react';

import { useFieldErrorProps } from '../hooks';
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
export function FormDatePicker<FieldValues extends object>({
  rules,
  ...props
}: FormDatePickerProps<FieldValues>) {
  const validationRules = useMemo(() => {
    const validate = rules?.validate || DEFAULT_VALIDATE;

    return {
      ...rules,
      validate: compose(isDate(), validate as InitializedRule),
    };
  }, [rules]);

  const { field, fieldState } = useController({
    ...props,
    rules: validationRules,
  });
  const errorProps = useFieldErrorProps(fieldState);

  return (
    <DatePicker
      {...field}
      {...props}
      inputProps={{ ...props.inputProps, ...errorProps }}
    />
  );
}
