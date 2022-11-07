import { ChevronDOutlineMd } from '@astral/icons';

import { styled } from '../../../styles';
import { ListItemButton } from '../../../ListItemButton';
import { ListItemIcon } from '../../../ListItemIcon';
import { ListItemText } from '../../../ListItemText';

export const NavMenuItemButtonRoot = styled(ListItemButton)`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.shape.medium};

  transition: ${({ theme }) => {
    return theme.transitions.create('color', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shorter,
    }) ;
  }};

  .MuiListItemIcon-root {
    color: ${({ theme, selected }) => {
      return selected ? theme.palette.primary['800'] : 'inherit';
    }};
  }

  &.Mui-selected:hover {
    background-color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary['800']};

    background-color: inherit;

    .MuiListItemIcon-root {
      color: ${({ theme }) => theme.palette.primary['800']};
    }
  }

  &:active {
    color: ${({ theme }) => theme.palette.primary['900']};

    .MuiListItemIcon-root {
      color: ${({ theme }) => theme.palette.primary['900']};
    }
  }
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
  width: ${({ collapsedIn }) => {
    if (collapsedIn) {
      return '1em';
    }

    return '0px';
  }};
  margin-left: auto;

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
    }) ;
  }};
`;
