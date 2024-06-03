import type { ForwardedRef } from 'react';
import {
  EmailField,
  type EmailFieldProps,
  forwardRefWithGeneric,
} from '@astral/components';

import { type WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormEmailFieldProps<FieldValues extends object> =
  WithFormFieldProps<EmailFieldProps, FieldValues>;

function FormEmailFieldInner<T extends object>(
  props: FormEmailFieldProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const fieldProps = useFormFieldProps<FormEmailFieldProps<T>, T>(props);

  return <EmailField {...fieldProps} ref={ref} />;
}

export const FormEmailField = forwardRefWithGeneric(FormEmailFieldInner);
