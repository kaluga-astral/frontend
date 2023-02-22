import { FocusEvent } from 'react';
import { TextField, TextFieldProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { FieldValues, WithFormFieldProps } from '../types';

export type FormTextFieldProps<TFieldValues extends FieldValues> =
  WithFormFieldProps<TextFieldProps, TFieldValues> & {
    /**
     * @description Параметр для обрезания пробелов в текстфилде при вызове onBlur. По-умолчанию true
     * @example <FormTextField trimmed={false} />
     */
    trimmed?: boolean;
  };

/**
 * @description Адаптер для TextField
 */
export function FormTextField<TFieldValues extends FieldValues>({
  trimmed = true,
  ...props
}: FormTextFieldProps<TFieldValues>) {
  const fieldProps = useFormFieldProps<
    FormTextFieldProps<TFieldValues>,
    TFieldValues
  >(props);

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (trimmed) {
      fieldProps.onChange(event.target.value?.trim());
    }

    fieldProps.onBlur();
    props.onBlur?.(event);
  };

  return <TextField {...fieldProps} onBlur={handleOnBlur} />;
}
