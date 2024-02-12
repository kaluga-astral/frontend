import {
  DialogActions as MuiDialogActions,
  type DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { Grid } from '../Grid';
import { useViewportType } from '../hooks/useViewportType';
import { LegacyGrid } from '../LegacyGrid';

export type DialogActionsProps = WithoutEmotionSpecific<MuiDialogActionsProps>;

export const DialogActions = ({
  children,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  const { isMobile } = useViewportType();

  if (isMobile) {
    return (
      <MuiDialogActions {...props}>
        <Grid container direction="row" spacing={disableSpacing ? 0 : 2}>
          {children}
        </Grid>
      </MuiDialogActions>
    );
  }

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
