import React from 'react';
import { DrawerProps as MuiDrawerProps } from '@mui/material';

export type SideDialogProps = MuiDrawerProps & {
  title?: string;
  disableBackdropClick?: boolean;
  onClose?: (
    event?: React.MouseEvent<HTMLButtonElement>,
    reason?: 'backdropClick' | 'escapeKeyDown'
  ) => void;
};
