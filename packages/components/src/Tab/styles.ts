import { Tab } from '@mui/material';

import { styled } from '../styles';

import { type TabProps } from './Tab';

export const TabRoot = styled(Tab)<TabProps>`
  min-height: 36px;
  margin-right: ${({ theme }) => theme.spacing(4)};
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
