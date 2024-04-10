import { type DialogContentTextProps as MuiDialogContentTextProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledDialogContentText } from './styles';

export type DialogContentTextProps =
  WithoutEmotionSpecific<MuiDialogContentTextProps>;

export const DialogContentText = (props: DialogContentTextProps) => (
  <StyledDialogContentText {...props} />
);
