import { styled } from '../../styles';

export const SidebarRoot = styled.aside<{ collapsedIn: boolean }>`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  padding: ${({ theme }) => theme.spacing(2)};
  width: ${({ collapsedIn }) => {
    if (collapsedIn) {
      return '240px';
    }

    return '100%';
  }};
  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
  transition: ${({ theme }) => {
    return theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    });
  }};
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};
`;
