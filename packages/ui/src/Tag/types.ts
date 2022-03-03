import { ChipProps as MuiTagProps } from '@mui/material/Chip/Chip';

import { TagColors, TagStates, TagVariants } from './constants';

export type TagColor = `${TagColors}`;
export type TagVariant = `${TagVariants}`;
export type TagState = `${TagStates}`;

export type TagProps = Omit<MuiTagProps, 'color' | 'variant' | 'size'> & {
  color?: TagColor;
  variant?: TagVariant;
  rounded?: boolean;
};
