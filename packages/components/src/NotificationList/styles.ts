import { drawerClasses } from '@mui/material';

import { SideDialog } from '../SideDialog';
import { SideDialogHeader } from '../SideDialogHeader';
import { styled } from '../styles';

export const NotificationListDialog = styled(SideDialog)`
  .${drawerClasses.paper} {
    width: 35%;
  }
`;

export const NotificationListMain = styled('ul')`
  overflow-y: auto;

  height: 100%;
  padding: ${({ theme }) => theme.spacing(0, 6)};
`;

export const NotificationListHeader = styled(SideDialogHeader)`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const NotificationListFooter = styled('footer')`
  display: flex;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing(4, 6)};
`;
