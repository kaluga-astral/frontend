import {
  DialogContentText as MuiDialogContentText,
  type DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type DialogContentTextProps =
  WithoutEmotionSpecific<MuiDialogContentTextProps>;

export const DialogContentText = (props: DialogContentTextProps) => (
  <MuiDialogContentText {...props} />
);
