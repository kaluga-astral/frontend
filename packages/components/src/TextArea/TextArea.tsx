import { forwardRef } from 'react';

import { TextField } from '../TextField';
import { type TextFieldProps } from '../TextField';

export type TextAreaProps = Omit<TextFieldProps, 'multiline'>;

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ rows = 7, ...props }, ref) => {
    return <TextField ref={ref} multiline rows={rows} {...props} />;
  },
);
