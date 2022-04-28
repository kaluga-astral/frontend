import { MenuItem as MuiMenuItem } from '@mui/material';

import { styled } from '../styles';

import { MenuItemProps } from './types';

export const StyledMenuItem = styled(MuiMenuItem)<MenuItemProps>`
  padding: ${({ theme }) => theme.spacing(1.5, 10, 1.5, 3)};
`;
