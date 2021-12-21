import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge/Badge';

type BadgeColor =
  | 'primary'
  | 'grey'
  | 'white'
  | 'errorLight'
  | 'error'
  | 'success';

export type BadgeProps = Omit<MuiBadgeProps, 'color'> & {
  customColor: BadgeColor;
};
