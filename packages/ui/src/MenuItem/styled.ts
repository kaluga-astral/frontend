import { MenuItem } from '@mui/material';

import { styled } from '../styles';

import { MenuItemProps } from './types';

type StyledMenuItemThemeProps = MenuItemProps;

export const StyledMenuItem = styled(MenuItem)<StyledMenuItemThemeProps>`
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.elementHover};
  }
`;
