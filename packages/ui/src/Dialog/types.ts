import { DialogProps as MuiDialogProps } from '@mui/material';

export type DialogProps = MuiDialogProps & {
  title?: string;
  disableBackdropClick?: boolean;
};
