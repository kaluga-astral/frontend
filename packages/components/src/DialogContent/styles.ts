import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles';

export const StyledDialogContent = styled(MuiDialogContent)<DialogContentProps>`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: ${({ theme }) => theme.spacing(6)};
  }
`;
