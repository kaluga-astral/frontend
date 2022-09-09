import { Tab, TabProps } from '@mui/material';

import { styled } from '../styles';

export const StyledTab = styled(Tab)<TabProps>`
  min-width: 0;
  padding-right: 8px;
  padding-bottom: 0;
  padding-left: 8px;

  text-transform: none;
`;
