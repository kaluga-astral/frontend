import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';
import { ChipProps as MuiTagProps } from '@mui/material';

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
  ({ color, variant, deleteIcon, ...props }, ref) => {
    return (
      <StyledTag
        ref={ref}
        customColor={color}
        customVariant={variant}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
