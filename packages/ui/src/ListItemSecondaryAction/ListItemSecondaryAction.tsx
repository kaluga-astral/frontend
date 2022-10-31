import {
  ListItemSecondaryAction as MuiListItemSecondaryAction,
  ListItemSecondaryActionProps as MuiListItemSecondaryActionProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type ListItemSecondaryActionProps =
  WithoutEmotionSpecific<MuiListItemSecondaryActionProps>;

export const ListItemSecondaryAction = (
  props: ListItemSecondaryActionProps,
) => <MuiListItemSecondaryAction {...props} />;
