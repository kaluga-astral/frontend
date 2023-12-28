import { ChevronDOutlineMd } from '@astral/icons';

import { styled } from '../../../styles';
import { ListItemButton } from '../../../ListItemButton';
import { ListItemIcon } from '../../../ListItemIcon';
import { ListItemText } from '../../../ListItemText';

export const NavMenuItemButtonRoot = styled(ListItemButton)`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.shape.small};

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.grey['900']};

    background-color: ${({ theme }) => theme.palette.primary['100']};
    border-left: 3px solid ${({ theme }) => theme.palette.primary['800']};
  }

  &.Mui-selected:hover {
    background-color: ${({ theme }) => theme.palette.primary['100']};
  }

  &.Mui-selected:focus {
    border: 2px solid ${({ theme }) => theme.palette.primary['400']};
  }

  &:hover {
    color: ${({ theme, selected }) =>
      selected ? theme.palette.grey['900'] : theme.palette.primary['800']};

    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary['100'] : 'inherit'};

    .MuiListItemIcon-root {
      color: ${({ theme, selected }) =>
        selected ? theme.palette.grey['900'] : theme.palette.primary['800']};
    }
  }

  &:active {
    color: ${({ theme, selected }) =>
      selected ? theme.palette.grey['900'] : theme.palette.primary['900']};

    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary['100'] : 'inherit'};

    .MuiListItemIcon-root {
      color: ${({ theme, selected }) =>
        selected ? theme.palette.grey['900'] : theme.palette.primary['900']};
    }
  }

  &:focus {
    color: ${({ theme, selected }) =>
      selected ? theme.palette.grey['900'] : theme.palette.primary['900']};

    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary['100'] : 'inherit'};
    border: 2px solid ${({ theme }) => theme.palette.primary['400']};

    .MuiListItemIcon-root {
      color: ${({ theme, selected }) =>
        selected ? theme.palette.grey['900'] : theme.palette.primary['900']};
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
  transform: ${({ opened }) => {
    if (opened) {
      return 'rotateZ(180deg)';
    }

    return 'rotateZ(0deg)';
  }};

  width: ${({ collapsedIn }) => {
    if (collapsedIn) {
      return '1em';
    }

    return '0px';
  }};
  margin-left: auto;

  transition: ${({ theme }) => {
    return theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    });
  }};
`;
