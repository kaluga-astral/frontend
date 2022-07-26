import { styled } from '../../styles';

export const SidebarRoot = styled.aside<{ collapsedIn: boolean }>`
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  min-width: ${({ collapsedIn }) => {
    if (collapsedIn) {
      return '240px';
    }

    return '100%';
  }};
  padding: ${({ theme }) => theme.spacing(2)};

  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};

  transition: ${({ theme }) => {
    return theme.transitions.create('min-width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }) ;
  }};
`;
