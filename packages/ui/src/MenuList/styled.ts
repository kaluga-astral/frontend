import { MenuList } from '@mui/material';

import { styled } from '../styles';

import { MenuListProps } from './types';

export const StyledMenuList = styled(MenuList)<MenuListProps>`
  &.MuiList-root {
    ${({ theme }) => theme.elevation[200]}
    border-radius: ${({ theme }) => theme.shape.small};
    padding: ${({ theme }) => theme.spacing(1, 0)};
  }
`;
