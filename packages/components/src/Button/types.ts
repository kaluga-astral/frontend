import type {
  ButtonColors,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from './enums';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    contained: true;
    light: true;
    text: true;
    link: true;
  }

  interface ButtonPropsColorVariantOverrides {
    primary: true;
    success: true;
    warning: true;
    error: true;
  }
}

export type ButtonColor = `${ButtonColors}`;

export type ButtonVariant = `${ButtonVariants}`;

export type ButtonSize = `${ButtonSizes}`;

export type ButtonState = `${ButtonStates}`;
