import { styled } from '../../styles';
import { ListItem } from '../../ListItem';
import { Button } from '../../Button';

export const SidebarRoot = styled.aside<{ collapsed: boolean }>`
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  display: flex;
  flex-direction: column;
  grid-area: sidebar;

  width: ${({ collapsed }) => {
    if (collapsed) {
      return '100%';
    }

    return '240px';
  }};

  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};

  transition: ${({ theme }) => {
    return theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }) ;
  }};
`;

export const SidebarNav = styled.nav`
  display: block;
`;

export const NavListItem = styled(ListItem)`
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const SidebarTogglerWrapper = styled.div`
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const SidebarToggler = styled(Button)`
  gap: 0;
  justify-content: flex-start;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(1)};

  &.MuiButton-root .MuiButton-startIcon {
    margin: 0;
  }
`;

export const SidebarTogglerContent = styled.span<{ collapsed: boolean }>`
  margin-left: ${({ theme }) => theme.spacing(4)};

  white-space: nowrap;
`;
