import { Menu } from '@mui/material';

import { styled } from '../styles';

import { MenuProps } from './types';

export const StyledMenu = styled(Menu)<MenuProps>`
  .MuiMenu-paper {
    margin-top: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.shape.small};
    box-shadow: ${({ theme }) => theme.elevation[200]};
  }

  .MuiMenu-list {
    padding: ${({ theme }) => theme.spacing(1, 0)};
  }
`;
