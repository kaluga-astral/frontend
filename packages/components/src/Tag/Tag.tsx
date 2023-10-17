import { ReactElement, forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';
import { ChipProps as MuiTagProps } from '@mui/material';

import { LegacyGrid } from '../LegacyGrid';
import { WithoutEmotionSpecific } from '../types';
import { BadgeColor } from '../Badge';

import { StyledTag, getBadgeColor } from './styles';
import { TagColor, TagSize, TagVariant } from './types';

export type TagAddonProps = {
  color?: BadgeColor;
};

export type TagAddon = (props: TagAddonProps) => ReactElement | null;

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

  /**
   * Контент слева от label
   */
  startAddon?: TagAddon;

  /**
   * Контент справа от label
   */
  endAddon?: TagAddon;
};

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      color,
      variant,
      deleteIcon,
      size = 'small',
      label,
      startAddon: StartAddon,
      endAddon: EndAddon,
      ...props
    },
    ref,
  ) => {
    const labelContent = (
      <LegacyGrid
        container
        component="span"
        justifyContent="flex-start"
        alignItems="center"
        autoFlow="column"
        spacing={1}
      >
        {StartAddon && (
          <StartAddon color={getBadgeColor({ variant, tagColor: color })} />
        )}
        {label}
        {EndAddon && (
          <EndAddon color={getBadgeColor({ variant, tagColor: color })} />
        )}
      </LegacyGrid>
    );

    return (
      <StyledTag
        ref={ref}
        customColor={color}
        customVariant={variant}
        customSize={size}
        label={labelContent}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
