import { ElementType, forwardRef } from 'react';
import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type ListItemButtonProps = Omit<
  WithoutEmotionSpecific<MuiListItemButtonProps>,
  'disableRipple'
> & {
  component?: ElementType;
};

export const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  (props, ref) => {
    return (
      <MuiListItemButton ref={ref} component="div" {...props} disableRipple />
    );
  },
);
