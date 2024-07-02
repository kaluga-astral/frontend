import { Switch as MuiSwitch, switchClasses } from '@mui/material';

import { styled } from '../styles';

export const StyledSwitch = styled(MuiSwitch)`
  .Mui-focusVisible + .${switchClasses.track} {
    border: 2px solid ${({ theme }) => theme.palette.primary[400]};
  }
`;
