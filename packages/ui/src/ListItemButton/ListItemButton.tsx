import { ElementType, forwardRef } from 'react';
import { ListItemButton as MuiListItemButton } from '@mui/material';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton/ListItemButton';

export type ListItemButtonProps = Omit<
  MuiListItemButtonProps,
  'disableRipple'
> & {
  component: ElementType;
};

export const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  (props, ref) => {
    return <MuiListItemButton ref={ref} {...props} disableRipple />;
  },
);
