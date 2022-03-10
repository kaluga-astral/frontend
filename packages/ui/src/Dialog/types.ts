import React from 'react';
import { DialogProps as MuiDialogProps } from '@mui/material';

export type DialogProps = Omit<MuiDialogProps, 'onClose'> & {
  title?: string;
  showCloseButton?: boolean;
  disableBackdropClick?: boolean;
  onClose?: (
    event?: React.MouseEvent<HTMLButtonElement>,
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => void;
};
