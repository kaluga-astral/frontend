import { ListItem } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { ListItemStates } from './constants';
import { ListItemProps } from './types';

type StyledListItemThemeProps = ListItemProps & {
  theme: Theme;
};

export const getBgColor = ({
  selected,
  theme,
}: StyledListItemThemeProps): string => {
  if (selected) return theme.palette.grey[100];

  return 'transparent';
};

export const getColor = ({
  theme,
  selected,
  listItemState,
}: StyledListItemThemeProps & {
  listItemState: ListItemStates;
}): string => {
  if (selected) return theme.palette.primary[800];
  if (listItemState === ListItemStates.DEFAULT) return theme.palette.grey[900];
  if (listItemState === ListItemStates.HOVER) return theme.palette.primary[800];

  return theme.palette.grey[900];
};

export const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<ListItemProps>`
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  border-radius: ${({ theme }) => theme.shape.small};
  background-color: ${(props) => getBgColor({ ...props })};
  color: ${(props) =>
    getColor({ ...props, listItemState: ListItemStates.DEFAULT })};

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  :hover {
    color: ${(props) =>
      getColor({
        ...props,
        listItemState: ListItemStates.HOVER,
      })};
  }
`;
