import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type MenuItemProps = WithoutEmotionSpecific<MuiMenuItemProps>;

export const MenuItem = (props: MenuItemProps) => {
  return <MuiMenuItem {...props} />;
};
