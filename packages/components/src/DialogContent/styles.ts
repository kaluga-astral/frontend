import {
  type DialogContentProps,
  DialogContent as MuiDialogContent,
} from '@mui/material';

import { styled } from '../styles';

export const StyledDialogContent = styled(MuiDialogContent)<DialogContentProps>`
  padding: ${({ theme }) => theme.spacing(0, 6)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme }) => theme.spacing(5, 4)};
  }
`;
