import { type ElementType, forwardRef } from 'react';
import {
  ListItemButton as MuiListItemButton,
  type ListItemButtonProps as MuiListItemButtonProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

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
