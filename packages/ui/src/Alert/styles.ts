import { Alert, AlertProps } from '@mui/material';

import { styled } from '../styles';

/**
 * @description Выбор брейкпоинта для медиа-запроса.
 */
const getBreakpointSM = (): string => '600px';

export const StyledAlert = styled(Alert)<AlertProps>`
  padding: ${({ theme }) => theme.spacing(3)};

  .MuiAlert-message > *:last-child:not(:empty):not(.MuiTypography-root) {
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }

  @media screen and (min-width: ${getBreakpointSM()}) {
    padding: ${({ theme }) => theme.spacing(2, 4)};

    .MuiAlert-message > *:last-child:not(:empty):not(.MuiTypography-root) {
      padding: 0;
    }
  }
`;
