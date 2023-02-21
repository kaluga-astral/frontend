import { FocusEvent } from 'react';
import { TextField, TextFieldProps } from '@astral/components';
import { useController } from 'react-hook-form';

import { useFormFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormTextFieldValue = string;

export type FormTextFieldProps<FieldValues extends object> = WithFormFieldProps<
  TextFieldProps,
  FieldValues
> & {
  /**
   * @description Параметр для обрезания пробелов в текстфилде. По-умолчанию true
   * @example <FormTextField trimmed={false} />
   */
  trimmed?: boolean;
};

/**
 * @description Адаптер для TextField
 */
export function FormTextField<FieldValues extends object>({
  trimmed = true,
  ...props
}: FormTextFieldProps<FieldValues>) {
  const { field, fieldState } = useController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (trimmed) {
      field.onChange(event.target.value?.trim());
    }

    field.onBlur();
    props.onBlur?.(event);
  };

  return (
    <TextField {...field} {...props} onBlur={handleOnBlur} {...errorProps} />
  );
}
