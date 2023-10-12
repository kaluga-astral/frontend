import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge/Badge';

import { WithoutEmotionSpecific } from '../types';

export type BadgeColor =
  | 'primary'
  | 'grey'
  | 'white'
  | 'warning'
  | 'errorLight'
  | 'error'
  | 'success';

export type BadgeProps = Omit<
  WithoutEmotionSpecific<MuiBadgeProps>,
  'color'
> & {
  /**
   * Цвет фона
   */
  color: BadgeColor;
  /**
   * Наличие белой рамки
   */
  withBorder?: boolean;
};
