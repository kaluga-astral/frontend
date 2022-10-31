import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge/Badge';

import { WithoutEmotionSpecific } from '../types';

export type BadgeColor =
  | 'primary'
  | 'grey'
  | 'white'
  | 'errorLight'
  | 'error'
  | 'success';

export type BadgeProps = Omit<
  WithoutEmotionSpecific<MuiBadgeProps>,
  'color'
> & {
  color: BadgeColor;
};
