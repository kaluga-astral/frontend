import { type DialogActionsProps as MuiDialogActionsProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledDialogActions, StyledGrid } from './styles';

export type DialogActionsProps = WithoutEmotionSpecific<MuiDialogActionsProps>;

export const DialogActions = ({
  children,
  disableSpacing,
  ...props
}: DialogActionsProps) => {
  return (
    <StyledDialogActions {...props}>
      <StyledGrid spacing={disableSpacing ? 0 : 2}>{children}</StyledGrid>
    </StyledDialogActions>
  );
};
