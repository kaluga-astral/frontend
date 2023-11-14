import { SideDialog } from '../SideDialog';
import { styled } from '../styles';

export const NotificationListDialog = styled(SideDialog)`
  & .MuiPaper-root {
    width: 35%;
  }
`;

export const NotificationListMain = styled('ul')`
  scroll-behavior: smooth;

  overflow-y: auto;

  height: 100%;
  padding: ${({ theme }) => theme.spacing(0, 6)};
`;

export const NotificationListHeader = styled('div')`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(4)};
  justify-content: flex-end;

  height: 100%;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const NotificationListFooter = styled('div')`
  display: flex;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing(4, 6)};
`;
