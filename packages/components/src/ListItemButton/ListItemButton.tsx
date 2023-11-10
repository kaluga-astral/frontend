import type { ElementType } from 'react';
import { forwardRef } from 'react';
import type { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';
import { ListItemButton as MuiListItemButton } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

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
