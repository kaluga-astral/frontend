import { ChipProps as MuiTagProps } from '@mui/material/Chip/Chip';

import { WithoutEmotionSpecific } from '../types';

import { TagColors, TagStates, TagVariants } from './enums';

export type TagColor = `${TagColors}`;

export type TagVariant = `${TagVariants}`;

export type TagState = `${TagStates}`;

export type TagProps = Omit<
  WithoutEmotionSpecific<MuiTagProps>,
  'color' | 'variant' | 'size' | 'onChange'
> & {
  color?: TagColor;
  variant?: TagVariant;
  rounded?: boolean;
  checkable?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};
