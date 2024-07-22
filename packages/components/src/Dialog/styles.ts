import {
  Dialog as MuiDialog,
  backdropClasses,
  dialogClasses,
} from '@mui/material';

import { styled } from '../styles';

export const StyledDialog = styled(MuiDialog)`
  &.${dialogClasses.root} .${backdropClasses.root} {
    background-color: ${({ theme }) => theme.palette.background.modalShadow};
  }
`;
