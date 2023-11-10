import type { ListItemSecondaryActionProps as MuiListItemSecondaryActionProps } from '@mui/material';
import { ListItemSecondaryAction as MuiListItemSecondaryAction } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type ListItemSecondaryActionProps =
  WithoutEmotionSpecific<MuiListItemSecondaryActionProps>;

export const ListItemSecondaryAction = (
  props: ListItemSecondaryActionProps,
) => <MuiListItemSecondaryAction {...props} />;
