import React from 'react';
import { DialogActionsProps as MuiDialogActionsProps } from '@mui/material';

export type DialogActionsProps = MuiDialogActionsProps & {
  leftSideChildren?: React.ReactNode;
};
