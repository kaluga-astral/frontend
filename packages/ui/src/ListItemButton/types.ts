import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton/ListItemButton';

export type ListItemButtonProps = Omit<MuiListItemButtonProps, 'disableRipple'>;
