import {
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type DialogContentTextProps =
  WithoutEmotionSpecific<MuiDialogContentTextProps>;

export const DialogContentText = (props: DialogContentTextProps) => (
  <MuiDialogContentText {...props} />
);
