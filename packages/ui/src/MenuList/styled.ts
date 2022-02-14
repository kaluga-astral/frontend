import { MenuList } from '@mui/material';

import { styled } from '../styles';

import { MenuListProps } from './types';

export const StyledMenuList = styled(MenuList)<MenuListProps>`
  &.MuiList-root {
    padding: ${({ theme }) => theme.spacing(1, 0)};
    border-radius: ${({ theme }) => theme.shape.small};
    box-shadow: ${({ theme }) => theme.elevation[200]};
  }
`;
