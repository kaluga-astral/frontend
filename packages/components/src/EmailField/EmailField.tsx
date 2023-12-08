import { forwardRef } from 'react';

import { type TextFieldProps } from '../TextField';
import { TextField } from '../TextField';

export const EmailField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return <TextField ref={ref} type="email" {...props} />;
  },
);
