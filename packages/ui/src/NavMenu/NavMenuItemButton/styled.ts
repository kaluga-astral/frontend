import { ChevronDOutlineMd } from '@astral/icons';

import { styled } from '../../styles';
import { ListItemButton } from '../../ListItemButton';
import { ListItemIcon } from '../../ListItemIcon';
import { ListItemText } from '../../ListItemText';

export const NavMenuItemButtonRoot = styled(ListItemButton)`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.medium};
`;

export const NavMenuItemButtonIcon = styled(ListItemIcon)`
  min-width: unset;
`;

export const NavMenuItemButtonText = styled(ListItemText)`
  margin-left: ${({ theme }) => theme.spacing(4)};
`;

export const NavMenuItemButtonChevron = styled(ChevronDOutlineMd, {
  shouldForwardProp: (prop) => prop !== 'collapsedIn' && prop !== 'opened',
})<{
  opened?: boolean;
  collapsedIn: boolean;
}>`
  margin-left: auto;
  width: ${({ collapsedIn }) => {
    if (collapsedIn) {
      return '1em';
    }

    return 0;
  }};
  transform: ${({ opened }) => {
    if (opened) {
      return 'rotateZ(180deg)';
    }

    return 'rotateZ(0deg)';
  }};
  transition: ${({ theme }) => {
    return theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    });
  }};
`;
