import { styled } from '../../styles';

export const SidebarRoot = styled.aside<{ collapsedIn: boolean }>`
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  display: flex;
  grid-area: sidebar;
  flex-direction: column;

  min-width: ${({ collapsedIn }) => (collapsedIn ? '240px' : '100%')};
  padding: ${({ theme }) => theme.spacing(2)};

  background-color: ${({ theme }) => theme.palette.background.element};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};

  transition: ${({ theme }) => {
    return theme.transitions.create(['min-width', 'padding'], {
      duration: theme.transitions.duration.standard,
    });
  }};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    top: 48px;
    bottom: 0;

    overflow: hidden;

    width: 0;
    min-width: ${({ collapsedIn }) => (collapsedIn ? '100vw' : '0px')};
    padding: ${({ theme }) => theme.spacing(3, 0)};

    background-color: ${({ theme }) => theme.palette.background.default};
    border-right: 0;
  }
`;

export const SidebarHeader = styled.div`
  display: contents;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;

    padding: ${({ theme }) => theme.spacing(0, 4)};
  }
`;
