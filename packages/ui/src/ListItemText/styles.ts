import { ListItemText, ListItemTextProps } from '@mui/material';

import { styled } from '../styles';

type StyledListItemTextProps = ListItemTextProps;

export const StyledListItemText = styled(ListItemText)<StyledListItemTextProps>`
  overflow: hidden;

  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
`;
