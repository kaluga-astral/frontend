import { ButtonProps as MuiButtonProps } from '@mui/material';

import { ButtonColors, ButtonSizes, ButtonVariants } from './constants';

export type ButtonColor = `${ButtonColors}`;

export type ButtonVariant = `${ButtonVariants}`;

export type ButtonSize = `${ButtonSizes}`;

export type ButtonProps = Omit<MuiButtonProps, 'color' | 'variant' | 'size'> & {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
};
