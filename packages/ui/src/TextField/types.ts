import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

import { WithoutEmotionSpecific } from '../types';

export type TextFieldProps = Omit<
  WithoutEmotionSpecific<MuiTextFieldProps>,
  'variant' | 'color'
> & {
  variant?: never;
  color?: never;
  success?: boolean;
};
