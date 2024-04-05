import {
  MenuItem as MuiMenuItem,
  type MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type MenuItemProps = WithoutEmotionSpecific<MuiMenuItemProps>;

export const MenuItem = MuiMenuItem;
