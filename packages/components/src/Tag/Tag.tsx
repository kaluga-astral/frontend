import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';
import { ChipProps as MuiTagProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import { StyledTag } from './styles';
import { TagColor, TagSize, TagVariant } from './types';

export type TagProps = Omit<
  WithoutEmotionSpecific<MuiTagProps>,
  'color' | 'variant' | 'size'
> & {
  /**
   * Цвет тега
   */
  color?: TagColor;
  /**
   * Тип тега
   */
  variant?: TagVariant;
  /**
   * Скругленная форма тега
   */
  rounded?: boolean;
  /**
   * Размер тега
   */
  size?: TagSize;
};

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, variant, deleteIcon, size = 'small', ...props }, ref) => {
    return (
      <StyledTag
        ref={ref}
        customColor={color}
        customVariant={variant}
        customSize={size}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
