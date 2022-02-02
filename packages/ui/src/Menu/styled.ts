import { Menu } from '@mui/material';

import { styled } from '../styles';

import { MenuProps } from './types';

export const StyledMenu = styled(Menu)<MenuProps>`
  .MuiMenu-paper {
    ${({ theme }) => theme.elevation[200]}
    border-radius: ${({ theme }) => theme.shape.small};
  }

  .MuiMenu-list {
    padding: ${({ theme }) => theme.spacing(1, 0)};
  }
`;
