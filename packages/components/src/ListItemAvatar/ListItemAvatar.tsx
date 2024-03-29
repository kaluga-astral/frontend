import {
  ListItemAvatar as MuiListItemAvatar,
  type ListItemAvatarProps as MuiListItemAvatarProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type ListItemAvatarProps =
  WithoutEmotionSpecific<MuiListItemAvatarProps>;

export const ListItemAvatar = (props: ListItemAvatarProps) => (
  <MuiListItemAvatar {...props} />
);
