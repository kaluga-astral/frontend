import { Switch as MuiSwitch, switchClasses } from '@mui/material';

import { styled } from '../styles';

export const StyledSwitch = styled(MuiSwitch)`
  .Mui-focusVisible {
    border: 2px solid ${({ theme }) => theme.palette.primary[400]};
  }
  ${`.${switchClasses.track}`}::before {
    display: none;
  }

  ${`.${switchClasses.track}`}::after {
    display: none;
  }
`;
