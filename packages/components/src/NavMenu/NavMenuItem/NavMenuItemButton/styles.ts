import { ChevronDOutlineMd } from '@astral/icons';
import listItemButtonClasses from '@mui/material/ListItemButton/listItemButtonClasses';
import listItemIconClasses from '@mui/material/ListItemIcon/listItemIconClasses';

import { styled } from '../../../styles';
import { ListItemButton } from '../../../ListItemButton';
import { ListItemIcon } from '../../../ListItemIcon';
import { ListItemText } from '../../../ListItemText';

export const NavMenuItemButtonRoot = styled(ListItemButton)`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.shape.small};

  &.${listItemButtonClasses.selected} {
    color: ${({ theme }) => theme.palette.grey['900']};

    background-color: ${({ theme }) => theme.palette.primary['100']};
    box-shadow: -3px 0 0 0 ${({ theme }) => theme.palette.primary['800']};
  }

  &.${listItemButtonClasses.selected}:hover {
    background-color: ${({ theme }) => theme.palette.primary['100']};
  }

  &.${listItemButtonClasses.selected}:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primary['400']};
  }

  &:hover {
    color: ${({ theme, selected }) =>
      selected ? theme.palette.grey['900'] : theme.palette.primary['800']};

    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary['100'] : 'inherit'};

    .${listItemIconClasses.root} {
      color: ${({ theme, selected }) =>
        selected ? theme.palette.grey['900'] : theme.palette.primary['800']};
    }
  }

  &:active {
    color: ${({ theme, selected }) =>
      selected ? theme.palette.grey['900'] : theme.palette.primary['900']};

    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary['100'] : 'inherit'};

    .${listItemIconClasses.root} {
      color: ${({ theme, selected }) =>
        selected ? theme.palette.grey['900'] : theme.palette.primary['900']};
    }
  }

  &:focus-visible {
    color: ${({ theme, selected }) =>
      selected ? theme.palette.grey['900'] : theme.palette.primary['900']};

    background-color: ${({ theme, selected }) =>
      selected ? theme.palette.primary['100'] : 'inherit'};
    outline: 2px solid ${({ theme }) => theme.palette.primary['400']};

    .${listItemIconClasses.root} {
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
