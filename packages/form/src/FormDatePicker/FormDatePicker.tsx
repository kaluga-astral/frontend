import { DatePicker, DatePickerProps } from '@astral/components';
import { InitializedRule, compose, isDate } from '@astral/validations';
import { useController } from 'react-hook-form';
import { useMemo } from 'react';

import { useFormFieldErrorProps, useFormInputProps } from '../hooks';
import { WithFormFieldProps } from '../types';

const DEFAULT_VALIDATE = () => undefined;

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormDatePickerValue = Date;

export type FormDatePickerProps = WithFormFieldProps<DatePickerProps>;

/**
 * @description DatePicker для формы. Инкапсулирует дефолтную валидацию на валидность даты
 */
export function FormDatePicker({ rules, ...props }: FormDatePickerProps) {
  const validationRules = useMemo(() => {
    const validate = rules?.validate || DEFAULT_VALIDATE;

    return {
      ...rules,
      validate: compose(isDate(), validate as InitializedRule),
    };
  }, [rules]);

  const inputProps = useFormInputProps(props);

  const { field, fieldState } = useController({
    ...props,
    rules: validationRules,
  });
  const errorProps = useFormFieldErrorProps(fieldState);

  return (
    <DatePicker
      {...field}
      {...inputProps}
      inputProps={{ ...props.inputProps, ...errorProps }}
    />
  );
}
