import { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

import {
  ButtonColors,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from './constants';

// Тут и ниже преобразует enum в union
export type ButtonColor = `${ButtonColors}`;

export type ButtonVariant = `${ButtonVariants}`;

export type ButtonSize = `${ButtonSizes}`;

export type ButtonState = `${ButtonStates}`;

export type ButtonProps = Omit<
  LoadingButtonProps,
  'color' | 'variant' | 'size'
> & {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export type IconButtonProps = Omit<
  MuiIconButtonProps,
  'color' | 'variant' | 'size'
> & {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
};
