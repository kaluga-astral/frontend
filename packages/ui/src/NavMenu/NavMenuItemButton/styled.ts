import { styled } from '../../styles';
import { ListItemButton } from '../../ListItemButton';

export const NavMenuItemButtonRoot = styled(ListItemButton)`
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.shape.medium};
`;
