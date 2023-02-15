import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type FormControlProps = WithoutEmotionSpecific<MuiFormControlProps>;

export const FormControl = (props: FormControlProps) => (
  <MuiFormControl {...props} />
);
