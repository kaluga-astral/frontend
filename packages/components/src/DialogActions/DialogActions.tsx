import {
  DialogActions as MuiDialogActions,
  type DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

import { LegacyGrid } from '../LegacyGrid';
import { type WithoutEmotionSpecific } from '../types';

export type DialogActionsProps = WithoutEmotionSpecific<MuiDialogActionsProps>;

export const DialogActions = ({
  children,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  return (
    <MuiDialogActions {...props}>
      <LegacyGrid
        container
        autoFlow="column"
        justifyContent="end"
        spacing={disableSpacing ? 0 : 2}
      >
        {children}
      </LegacyGrid>
    </MuiDialogActions>
  );
};
