import {
  DialogActions as MuiDialogActions,
  type DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { DialogActionsGrid } from './styles';

export type DialogActionsProps = WithoutEmotionSpecific<MuiDialogActionsProps>;

export const DialogActions = ({
  children,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  return (
    <MuiDialogActions {...props}>
      <DialogActionsGrid spacing={disableSpacing ? 0 : 2}>
        {children}
      </DialogActionsGrid>
    </MuiDialogActions>
  );
};
