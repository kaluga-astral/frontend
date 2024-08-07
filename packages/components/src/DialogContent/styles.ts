import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles';

export const StyledDialogContent = styled(MuiDialogContent)<DialogContentProps>`
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: ${({ theme }) => theme.spacing(6)};
  }
`;
