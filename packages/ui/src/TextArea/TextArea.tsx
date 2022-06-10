import { forwardRef } from 'react';

import { TextField } from '../TextField';

import { TextAreaProps } from './types';

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ rows = 7, ...props }, ref) => {
    return <TextField ref={ref} multiline rows={rows} {...props} />;
  },
);
