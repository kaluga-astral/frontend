import type { FocusEvent, ForwardedRef } from 'react';
import {
  TextField,
  type TextFieldProps,
  forwardRefWithGeneric,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

export type FormTextFieldProps<FieldValues extends object> = WithFormFieldProps<
  TextFieldProps,
  FieldValues
> & {
  /**
   * @description Параметр для обрезания пробелов в текст филде при вызове onBlur. По-умолчанию true
   * @example <FormTextField trimmed={false} />
   */
  trimmed?: boolean;
};

/**
 * @description Адаптер для TextField
 */
function FormTextFieldInner<T extends object>(
  { trimmed = true, ...props }: FormTextFieldProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const fieldProps = useFormFieldProps<FormTextFieldProps<T>, T>(props);

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (trimmed) {
      fieldProps.onChange(event.target.value?.trim());
    }

    fieldProps.onBlur();
    props.onBlur?.(event);
  };

  return <TextField {...fieldProps} ref={ref} onBlur={handleOnBlur} />;
}

export const FormTextField = forwardRefWithGeneric(FormTextFieldInner);
