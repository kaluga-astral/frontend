import { ListItemButton } from '@mui/material';

import { styled } from '../../styles';

export const NavMenuItemButtonRoot = styled(ListItemButton)`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.medium};
`;
