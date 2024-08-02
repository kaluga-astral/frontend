import { styled } from '../../styles';

export const SidebarRoot = styled.aside<{ collapsedIn: boolean }>`
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  overflow: hidden;
  display: flex;
  grid-area: sidebar;
  flex-direction: column;

  min-width: ${({ collapsedIn }) => (collapsedIn ? '240px' : '100%')};
  padding: ${({ theme }) => theme.spacing(2)};

  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};

  transition: ${({ theme }) => {
    return theme.transitions.create(['min-width'], {
      duration: theme.transitions.duration.standard,
    });
  }};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    top: 48px;
    bottom: 0;
    transform: ${({ collapsedIn }) =>
      collapsedIn ? 'translateX(0px)' : 'translateX(-100vw)'};

    overflow: hidden;

    width: 100vw;
    min-width: 100vw;
    padding: ${({ theme }) => theme.spacing(3, 0)};

    background-color: ${({ theme }) => theme.palette.background.default};
    border-right: 0;

    transition: ${({ theme }) => {
      return theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      });
    }};
  }
`;

export const SidebarHeader = styled.div`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme }) => theme.spacing(0, 4)};
  }
`;
