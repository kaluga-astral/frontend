import type { ForwardedRef } from 'react';
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
>;

/**
 * @description Адаптер для TextField
 */
function FormTextFieldInner<T extends object>(
  props: FormTextFieldProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const fieldProps = useFormFieldProps<FormTextFieldProps<T>, T>(props);

  return <TextField {...fieldProps} ref={ref} />;
}

export const FormTextField = forwardRefWithGeneric(FormTextFieldInner);
