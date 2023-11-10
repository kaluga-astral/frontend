import type { DialogContentProps as MuiDialogContentProps } from '@mui/material';
import { DialogContent as MuiDialogContent } from '@mui/material';

import type { WithoutEmotionSpecific } from '../types';

export type DialogContentProps = WithoutEmotionSpecific<MuiDialogContentProps>;

export const DialogContent = (props: DialogContentProps) => (
  <MuiDialogContent {...props} />
);
