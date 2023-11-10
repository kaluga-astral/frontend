import type { FormControlProps as MuiFormControlProps } from '@mui/material';
import { FormControl as MuiFormControl } from '@mui/material';
import { forwardRef } from 'react';

import type { WithoutEmotionSpecific } from '../types';

export type FormControlProps = WithoutEmotionSpecific<MuiFormControlProps>;

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (props: FormControlProps, ref) => <MuiFormControl {...props} ref={ref} />,
);
