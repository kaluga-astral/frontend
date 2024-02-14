import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles/styled';

export const DialogContentRoot = styled(MuiDialogContent)<DialogContentProps>`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: ${({ theme }) => theme.spacing(6)};
  }
`;
