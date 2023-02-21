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
  trimmed?: boolean;
};

/**
 * @description Адаптер для TextField
 */
export function FormTextField<FieldValues extends object>(
  props: FormTextFieldProps<FieldValues>,
) {
  const { trimmed = true } = props;
  const { field, fieldState } = useController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (trimmed) {
      field.onChange(event.target.value?.trim());
    }

    field.onBlur();
  };

  return (
    <TextField {...field} {...props} onBlur={handleOnBlur} {...errorProps} />
  );
}
