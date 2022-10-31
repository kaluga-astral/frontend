import {
  ListItemAvatar as MuiListItemAvatar,
  ListItemAvatarProps as MuiListItemAvatarProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type ListItemAvatarProps =
  WithoutEmotionSpecific<MuiListItemAvatarProps>;

export const ListItemAvatar = (props: ListItemAvatarProps) => (
  <MuiListItemAvatar {...props} />
);
