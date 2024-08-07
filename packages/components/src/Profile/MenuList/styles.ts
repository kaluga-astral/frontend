import { menuClasses } from '@mui/material';

import { styled } from '../../styles';
import { Menu } from '../../Menu';
import { MenuItem } from '../../MenuItem';

export const StyledMenu = styled(Menu)`
  & .${menuClasses.paper} {
    min-width: 200px;
    max-width: 300px;
  }
`;

export const ExitMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => !['exitButton'].includes(prop),
})<{ exitButton: boolean }>`
  display: ${({ exitButton }) => exitButton === false && 'none'};
`;
