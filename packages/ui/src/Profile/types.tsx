import { AvatarProps, MenuProps } from '@mui/material';

export type ProfileProps = {
  displayName: string;
  email: string;
  avatar?: AvatarProps;
  Menu: React.FC<MenuProps>;
};
