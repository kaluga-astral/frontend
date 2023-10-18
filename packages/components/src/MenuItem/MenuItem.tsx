import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/material';
import { forwardRef } from 'react';

import { WithoutEmotionSpecific } from '../types';

export type MenuItemProps = WithoutEmotionSpecific<MuiMenuItemProps>;

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (props, ref) => {
    return <MuiMenuItem ref={ref} {...props} />;
  },
);
