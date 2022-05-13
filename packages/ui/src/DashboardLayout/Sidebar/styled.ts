import { styled } from '../../styles';
import { Button } from '../../Button';

export const SidebarRoot = styled.aside`
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  padding: ${({ theme }) => theme.spacing(6)};

  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

// export const SidebarNav = styled.nav`
// `;

export const SidebarToggler = styled(Button)`
  margin-top: auto;
`;
