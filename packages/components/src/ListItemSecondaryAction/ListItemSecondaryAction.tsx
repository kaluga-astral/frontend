import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  type ListItemSecondaryActionProps as MuiListItemSecondaryActionProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type ListItemSecondaryActionProps =
  WithoutEmotionSpecific<MuiListItemSecondaryActionProps>;

export const ListItemSecondaryAction = (
  props: ListItemSecondaryActionProps,
) => <MuiListItemSecondaryAction {...props} />;
