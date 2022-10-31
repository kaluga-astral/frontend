import { DialogProps as MuiDialogProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type DialogProps = WithoutEmotionSpecific<MuiDialogProps> & {
  title?: string;
  disableBackdropClick?: boolean;
};
