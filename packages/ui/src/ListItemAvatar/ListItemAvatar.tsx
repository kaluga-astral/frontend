import {
  ListItemAvatarProps,
  ListItemAvatar as MuiListItemAvatar,
} from '@mui/material';

export const ListItemAvatar = ({ children, ...props }: ListItemAvatarProps) => {
  return <MuiListItemAvatar {...props}>{children}</MuiListItemAvatar>;
};
