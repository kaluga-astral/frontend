import { ElementType, forwardRef } from 'react';
import { ListItemButton as MuiListItemButton } from '@mui/material';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton/ListItemButton';

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
