import { Alert, AlertProps } from '@mui/material';

import { styled } from '../styles';

export const StyledAlert = styled(Alert)<AlertProps>`
  padding: ${({ theme }) => theme.spacing(3)};

  .MuiAlert-message > *:last-child:not(:empty):not(.MuiTypography-root) {
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(2, 4)};

    .MuiAlert-message > *:last-child:not(:empty):not(.MuiTypography-root) {
      padding: 0;
    }
  }
`;
