import { DrawerProps as MuiDrawerProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type SideDialogProps = WithoutEmotionSpecific<MuiDrawerProps> & {
  title: string;
};
