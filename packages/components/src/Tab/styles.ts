import { Tab } from '@mui/material';
import { type TabProps as MuiTabProps } from '@mui/material';

import { styled } from '../styles';
import { type WithoutEmotionSpecific } from '../types';

export type TabProps = WithoutEmotionSpecific<MuiTabProps>;

export const StyledTab = styled(Tab)<TabProps>`
  min-height: 36px;
  margin-right: 16px;
  padding: 0;

  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[900]};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary[800]};
  }

  &:active {
    color: ${({ theme }) => theme.palette.primary[900]};
  }
`;
