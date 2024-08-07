import { styled } from '../../styles';
import { IconButton } from '../../IconButton';

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

    padding: ${({ theme }) => theme.spacing(0, 2, 0, 0)};

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

export const ProfileWrapper = styled('div', {
  shouldForwardProp: (prop) => !['$isShow'].includes(prop),
})<{
  $isShow: boolean;
}>`
  display: contents;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: ${({ $isShow }) => ($isShow ? 'block' : 'none')};

    margin-left: auto;
  }
`;

export const ExitButton = styled(IconButton, {
  shouldForwardProp: (prop) => !['$isShow'].includes(prop),
})<{
  $isShow: boolean;
}>`
  display: none;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: ${({ $isShow }) => (!$isShow ? 'none' : 'flex')};

    margin-left: auto;
  }
`;
