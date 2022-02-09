import { ChipProps as MuiTagProps } from '@mui/material/Chip/Chip';

import { TagColors, TagSizes, TagStates, TagVariants } from './constants';

export type TagColor = `${TagColors}`;
export type TagVariant = `${TagVariants}`;
export type TagSize = `${TagSizes}`;
export type TagState = `${TagStates}`;

export type TagProps = Omit<MuiTagProps, 'color' | 'variant'> & {
  color?: TagColor;
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
};
