import type { FocusEvent, ForwardedRef } from 'react';
import {
  EmailField,
  type EmailFieldProps,
  forwardRefWithGeneric,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

export type FormEmailFieldProps<FieldValues extends object> =
  WithFormFieldProps<EmailFieldProps, FieldValues> & {
    /**
     * @description Параметр для обрезания пробелов в текстфилде при вызове onBlur. По-умолчанию true
     * @example <FormEmailField trimmed={false} />
     */
    trimmed?: boolean;
  };

/**
 * @description Адаптер для EmailField
 */
function FormEmailFieldInner<T extends object>(
  { trimmed = true, ...props }: FormEmailFieldProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const fieldProps = useFormFieldProps<FormEmailFieldProps<T>, T>(props);

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (trimmed) {
      fieldProps.onChange(event.target.value?.trim());
    }

    fieldProps.onBlur();
    props.onBlur?.(event);
  };

  return <EmailField {...fieldProps} ref={ref} onBlur={handleOnBlur} />;
}

export const FormEmailField = forwardRefWithGeneric(FormEmailFieldInner);
