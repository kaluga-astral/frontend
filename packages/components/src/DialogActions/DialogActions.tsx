import {
  DialogActions as MuiDialogActions,
  type DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { useViewportType } from '../hooks/useViewportType';

import { DialogActionsGrid } from './styles';

export type DialogActionsProps = WithoutEmotionSpecific<MuiDialogActionsProps>;

export const DialogActions = ({
  children,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  const { isMobile } = useViewportType();

  return (
    <MuiDialogActions {...props}>
      <DialogActionsGrid
        container
        spacing={disableSpacing ? 0 : 2}
        isMobile={isMobile}
      >
        {children}
      </DialogActionsGrid>
    </MuiDialogActions>
  );
};
