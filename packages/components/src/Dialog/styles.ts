import {
  Dialog as MuiDialog,
  backdropClasses,
  dialogClasses,
} from '@mui/material';

import { styled } from '../styles';

export const StyledDialog = styled(MuiDialog)`
  background: unset;

  &.${dialogClasses.root} > .${backdropClasses.root} {
    background-color: rgb(0 0 0 / 50%);
  }
`;
