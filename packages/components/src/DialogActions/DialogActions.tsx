import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

import { Grid } from '../Grid';
import { WithoutEmotionSpecific } from '../types';

export type DialogActionsProps = WithoutEmotionSpecific<MuiDialogActionsProps>;

export const DialogActions = ({
  children,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  return (
    <MuiDialogActions {...props}>
      <Grid
        container
        autoFlow="column"
        justifyContent="end"
        spacing={disableSpacing ? 0 : 2}
      >
        {children}
      </Grid>
    </MuiDialogActions>
  );
};
