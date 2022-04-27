import { AvatarProps, MenuProps } from '@mui/material';

export type ProfileProps = {
  displayName: string;
  annotation?: string;
  avatar?: AvatarProps;
  menu: React.FC<MenuProps>;
};
