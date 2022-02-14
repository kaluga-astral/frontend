import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = Omit<MuiTextFieldProps, 'variant' | 'color'> & {
  variant?: never;
  color?: never;
  success?: boolean;
};
