import { ListItemButton } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { ListItemButtonStates } from './constants';
import { ListItemButtonProps } from './types';

type StyledListItemButtonThemeProps = ListItemButtonProps & {
  theme: Theme;
};

export const getBgColor = ({
  selected,
  theme,
}: StyledListItemButtonThemeProps): string => {
  if (selected) return theme.palette.grey[100];

  return 'transparent';
};

export const getColor = ({
  theme,
  selected,
  listItemButtonState,
}: StyledListItemButtonThemeProps & {
  listItemButtonState: ListItemButtonStates;
}): string => {
  if (listItemButtonState === ListItemButtonStates.DEFAULT)
    return theme.palette.grey[900];
  if (listItemButtonState === ListItemButtonStates.HOVER || selected)
    return theme.palette.primary[800];

  return theme.palette.grey[900];
};

export const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>`
  background-color: ${(props) => getBgColor({ ...props })};
  border-radius: ${({ theme }) => theme.shape.small};
  color: ${(props) =>
    getColor({ ...props, listItemButtonState: ListItemButtonStates.DEFAULT })};
  cursor: pointer;
  user-select: none;

  :hover {
    color: ${(props) =>
      getColor({
        ...props,
        listItemButtonState: ListItemButtonStates.HOVER,
      })};
  }
`;
