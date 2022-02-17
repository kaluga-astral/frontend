import {
  ListItemTextProps,
  ListItemText as MuiListItemText,
} from '@mui/material';

export const ListItemText = ({ children, ...props }: ListItemTextProps) => {
  return <MuiListItemText {...props}>{children}</MuiListItemText>;
};
