import { type DialogContentProps as MuiDialogContentProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { DialogContentRoot } from './styles';

export type DialogContentProps = WithoutEmotionSpecific<MuiDialogContentProps>;

export const DialogContent = (props: DialogContentProps) => (
  <DialogContentRoot {...props} />
);
