import type { ForwardedRef } from 'react';
import { EmailFieldProps, forwardRefWithGeneric } from '@astral/components';

import { FormTextField } from '../FormTextField';
import { type WithFormFieldProps } from '../types';

export type FormEmailFieldProps<FieldValues extends object> =
  WithFormFieldProps<EmailFieldProps, FieldValues>;

function FormEmailFieldInner<T extends object>(
  props: FormEmailFieldProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return <FormTextField ref={ref} type="email" {...props} />;
}

export const FormEmailField = forwardRefWithGeneric(FormEmailFieldInner);
