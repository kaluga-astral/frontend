import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';
import { ChipProps as MuiTagProps } from '@mui/material/Chip/Chip';

import { WithoutEmotionSpecific } from '../types';

import { StyledTag } from './styles';
import { TagColor, TagVariant } from './types';

export type TagProps = Omit<
  WithoutEmotionSpecific<MuiTagProps>,
  'color' | 'variant' | 'size'
> & {
  color?: TagColor;
  variant?: TagVariant;
  rounded?: boolean;
};

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, variant, deleteIcon, onChange, ...props }, ref) => {
    return (
      <StyledTag
        customColor={color}
        customVariant={variant}
        ref={ref}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
