import { DialogActions as MuiDialogActions } from '@mui/material';

import { Grid } from '../index';

import { DialogActionsProps } from './types';

export const DialogActions = ({
  children,
  leftSideChildren,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  return (
    <MuiDialogActions {...props}>
      <Grid
        container
        templateColumns="repeat(2, 1fr)"
        spacing={1}
        templateRows="auto"
        templateAreas={`"leftSideChildren buttons"`}
        justifyContent="space-between"
      >
        <Grid container justifyContent="start" area="leftSideChildren">
          {leftSideChildren}
        </Grid>
        <Grid
          container
          spacing={disableSpacing ? 0 : 2}
          justifyContent="end"
          autoFlow="column"
          area="buttons"
        >
          {children}
        </Grid>
      </Grid>
      {/*{children}*/}
    </MuiDialogActions>
  );
};
