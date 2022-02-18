import { ListItemButton } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { ListItemButtonStates } from './constants';
import { ListItemButtonProps } from './types';

type StyledListItemButtonThemeProps = ListItemButtonProps & {
  theme: Theme;
};

export const getBgColor = ({
  active,
  theme,
}: StyledListItemButtonThemeProps): string => {
  if (active) return theme.palette.grey[100];

  return 'transparent';
};

export const getColor = ({
  theme,
  active,
  listItemButtonState,
}: StyledListItemButtonThemeProps & {
  listItemButtonState: ListItemButtonStates;
}): string => {
  if (listItemButtonState === ListItemButtonStates.DEFAULT)
    return theme.palette.grey[900];
  if (listItemButtonState === ListItemButtonStates.HOVER || active)
    return theme.palette.primary[800];

  return theme.palette.grey[900];
};

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ListItemButtonProps>`
  background-color: ${(props) => getBgColor({ ...props })};
  color: ${(props) =>
    getColor({ ...props, listItemButtonState: ListItemButtonStates.DEFAULT })};

  :hover {
    color: ${(props) =>
      getColor({
        ...props,
        listItemButtonState: ListItemButtonStates.HOVER,
      })};
  }
`;
