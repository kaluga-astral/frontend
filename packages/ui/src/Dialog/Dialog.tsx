import React from 'react';
import { Dialog as MuiDialog } from '@mui/material';

import { DialogTitle } from '../index';

import { DialogProps } from './types';

export const Dialog = ({
  children,
  title,
  showCloseButton,
  disableBackdropClick,
  onClose,
  ...props
}: DialogProps) => {
  const handleClose =
    onClose &&
    ((
      event: React.MouseEvent<HTMLButtonElement>,
      reason: 'backdropClick' | 'escapeKeyDown'
    ) => {
      if (disableBackdropClick && reason == 'backdropClick') return;
      if (onClose) {
        onClose(event, reason);
      }
    });

  return (
    <MuiDialog onClose={handleClose} {...props}>
      {title && (
        <DialogTitle showCloseButton={showCloseButton} onClose={onClose}>
          {title}
        </DialogTitle>
      )}
      {children}
    </MuiDialog>
  );
};
