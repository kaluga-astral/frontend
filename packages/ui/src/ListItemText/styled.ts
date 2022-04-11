import { ListItemText, ListItemTextProps } from '@mui/material';

import { styled } from '../styles';

type StyledListItemTextProps = ListItemTextProps & {
  open: boolean;
};

export const StyledListItemText = styled(ListItemText)<StyledListItemTextProps>`
  overflow: hidden;

  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;

  opacity: ${({ open }) => (open ? 1 : 0)};
`;
