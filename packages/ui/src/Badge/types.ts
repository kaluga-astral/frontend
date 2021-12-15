import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge/Badge';

type BadgeColor =
  | 'primary'
  | 'grey'
  | 'white'
  | 'errorLight'
  | 'error'
  | 'success';

export interface BadgeProps extends Omit<MuiBadgeProps, 'color'> {
  color?: BadgeColor;
}
