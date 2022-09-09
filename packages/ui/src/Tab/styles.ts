import { Tab, TabProps } from '@mui/material';

import { styled } from '../styles';

export const StyledTab = styled(Tab)<TabProps>`
  min-width: 0;
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-bottom: 0;
  padding-left: ${({ theme }) => theme.spacing(2)};

  text-transform: none;
`;
