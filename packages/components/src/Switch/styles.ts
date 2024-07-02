import { Switch as MuiSwitch, switchClasses } from '@mui/material';

import { styled } from '../styles';

export const Switch = styled(MuiSwitch)`
  .Mui-focusVisible + .${switchClasses.track} {
    border: 2px solid #70aeff;
  }
`;
