import { AvatarProps, Avatar as MuiAvatar } from '@mui/material';

export const Avatar = ({ children, ...props }: AvatarProps) => {
  return <MuiAvatar {...props}>{children}</MuiAvatar>;
};
