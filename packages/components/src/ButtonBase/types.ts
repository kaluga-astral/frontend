import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';

import { WithoutEmotionSpecific } from '../types';

import {
  ButtonColors,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from './enums';

// Тут и ниже преобразует enum в union
export type ButtonColor = `${ButtonColors}`;

export type ButtonVariant = `${ButtonVariants}`;

export type ButtonSize = `${ButtonSizes}`;

export type ButtonState = `${ButtonStates}`;

export type BaseButtonProps = Omit<
  WithoutEmotionSpecific<ButtonUnstyledProps>,
  'color' | 'variant' | 'size'
> & {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  selected?: boolean;
};
