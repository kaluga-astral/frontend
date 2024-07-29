import { listItemIconClasses } from '@mui/material';
import { ChevronDOutlineMd } from '@astral/icons';

import { styled } from '../../../styles';
import { ListItemButton } from '../../../ListItemButton';
import { ListItemIcon } from '../../../ListItemIcon';
import { ListItemText } from '../../../ListItemText';

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isGroupTitleItem',
})<{
  isGroupTitleItem: boolean;
}>`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.shape.medium};

  ${listItemIconClasses.root} {
    color: ${({ theme, selected }) => {
      return selected ? theme.palette.primary['800'] : 'inherit';
    }};

    transition: ${({ theme }) => {
      return theme.transitions.create('color', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.shortest,
      });
    }};
  }

  &.Mui-selected:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary['800']};

    background-color: inherit;

    ${listItemIconClasses.root} {
      color: ${({ theme }) => theme.palette.primary['800']};
    }
  }

  &:active {
    color: ${({ theme }) => theme.palette.primary['900']};

    ${listItemIconClasses.root} {
      color: ${({ theme }) => theme.palette.primary['900']};
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: ${({ isGroupTitleItem }) => (isGroupTitleItem ? '24px' : '44px')};
    margin-top: ${({ theme, isGroupTitleItem }) =>
      isGroupTitleItem ? theme.spacing(4) : 0};
    padding: ${({ theme, isGroupTitleItem }) =>
      isGroupTitleItem ? theme.spacing(0, 5) : theme.spacing(3, 5)};

    border-radius: 0;

    &.Mui-selected {
      background-color: inherit;
    }
  }
`;

export const NavMenuItemButtonIcon = styled(ListItemIcon)`
  min-width: unset;
`;

export const NavMenuItemButtonText = styled(ListItemText)`
  margin-left: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0;
  }
`;

export const NavMenuItemButtonChevron = styled(ChevronDOutlineMd, {
  shouldForwardProp: (prop) => prop !== 'collapsedIn' && prop !== 'opened',
})<{
  opened?: boolean;
  collapsedIn: boolean;
}>`
  transform: ${({ opened }) => (opened ? 'rotateZ(180deg)' : 'rotateZ(0deg)')};

  width: ${({ collapsedIn }) => (collapsedIn ? '1em' : '0px')};
  margin-left: auto;

  transition: ${({ theme }) => {
    return theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    });
  }};
`;
