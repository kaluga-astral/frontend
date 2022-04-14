import {
  DialogActionsProps,
  DialogActions as MuiDialogActions,
} from '@mui/material';

import { Grid } from '../Grid';

export const SideDialogActions = ({
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
