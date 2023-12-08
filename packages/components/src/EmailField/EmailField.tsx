import { forwardRef } from 'react';

import { type TextFieldProps } from '../TextField';
import { TextField } from '../TextField';

export type EmailFieldProps = Omit<TextFieldProps, 'type'>;

export const EmailField = forwardRef<HTMLDivElement, EmailFieldProps>(
  (props, ref) => {
    return <TextField ref={ref} type="email" {...props} />;
  },
);
