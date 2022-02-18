import { ListItem } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { ListItemStates } from './constants';
import { ListItemProps } from './types';

type StyledListItemThemeProps = ListItemProps & {
  theme: Theme;
};

export const getBgColor = ({
  active,
  theme,
}: StyledListItemThemeProps): string => {
  if (active) return theme.palette.grey[100];

  return 'transparent';
};

export const getColor = ({
  theme,
  active,
  listItemState,
}: StyledListItemThemeProps & {
  listItemState: ListItemStates;
}): string => {
  if (active) return theme.palette.primary[800];
  if (listItemState === ListItemStates.DEFAULT) return theme.palette.grey[900];
  if (listItemState === ListItemStates.HOVER) return theme.palette.primary[800];

  return theme.palette.grey[900];
};

export const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ListItemProps>`
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => getBgColor({ ...props })};
  color: ${(props) =>
    getColor({ ...props, listItemState: ListItemStates.DEFAULT })};

  :hover {
    color: ${(props) =>
      getColor({
        ...props,
        listItemState: ListItemStates.HOVER,
      })};
  }
`;
