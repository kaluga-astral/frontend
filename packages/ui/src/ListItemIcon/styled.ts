import { ListItemIcon, ListItemIconProps } from '@mui/material';

import { styled } from '../styles';

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ListItemIconProps>`
  color: ${({ theme }) => theme.palette.primary[800]};
`;
