import { styled } from '../../styles';

export const HeaderRoot = styled.header`
  z-index: ${({ theme }) => theme.zIndex.appBar};

  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing(2, 3)};

  background-color: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.elevation[200]};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: flex-start;

    padding: ${({ theme }) => theme.spacing(0, 2)};

    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    box-shadow: unset;
  }
`;

export const SidebarTogglerWrapper = styled.div`
  flex-shrink: 0;

  width: 48px;
`;

export const HeaderSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-grow: 1;
  }
`;

export const ProfileWrapper = styled.div`
  display: contents;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;

    margin-left: auto;
  }
`;
