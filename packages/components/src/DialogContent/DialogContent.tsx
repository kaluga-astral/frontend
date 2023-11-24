import {
  DialogContent as MuiDialogContent,
  type DialogContentProps as MuiDialogContentProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type DialogContentProps = WithoutEmotionSpecific<MuiDialogContentProps>;

export const DialogContent = (props: DialogContentProps) => (
  <MuiDialogContent {...props} />
);
