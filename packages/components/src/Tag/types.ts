import { ReactElement } from 'react';
import { ChipProps as MuiTagProps } from '@mui/material/Chip/Chip';

import { BadgeColor } from '../Badge';
import { WithoutEmotionSpecific } from '../types';

import { TagColors, TagStates, TagVariants } from './enums';

export type TagColor = `${TagColors}`;

export type TagVariant = `${TagVariants}`;

export type TagSize = 'small' | 'medium' | 'large';

export type TagState = `${TagStates}`;

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
