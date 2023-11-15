import { styled } from '../../styles';
import { Typography } from '../../Typography';
import { NotificationListPriority } from '../types';
import { Theme } from '../../theme';
import { NOTIFICATION_PRIORITIES } from '../constants';
import { IconButton } from '../../IconButton';

const getPriorityColor = ({
  theme,
  priority,
}: {
  theme: Theme;
  priority?: NotificationListPriority;
}) => {
  if (priority === NOTIFICATION_PRIORITIES.important) {
    return theme.palette.yellow[800];
  }

  if (priority === NOTIFICATION_PRIORITIES.critical) {
    return theme.palette.red[800];
  }

  return theme.palette.primary.main;
};

export const ListItem = styled('li')`
  position: relative;

  display: grid;
  grid-template-columns: ${({ theme }) =>
    `${theme.spacing(6)} 1fr ${theme.spacing(8)}`};

  padding: ${({ theme }) => theme.spacing(4, 0)};

  &::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

export const ListItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isUnread',
})<{ isUnread: boolean }>`
  font-weight: ${({ theme, isUnread }) =>
    isUnread
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightMedium};
  line-height: ${({ theme }) => theme.typography.pxToRem(32)};
  color: ${({ theme }) => theme.palette.grey[900]};
`;

export const ListItemDate = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  color: ${({ theme }) => theme.palette.grey[600]};
`;

export const ListItemPriority = styled('div')`
  width: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(2)};

  border-radius: 50%;
`;

export const ListItemIconSlot = styled('div')<{
  priority: NotificationListPriority;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};

  & svg {
    max-width: ${({ theme }) => theme.spacing(4)};

    color: ${getPriorityColor};
  }

  & div {
    background-color: ${getPriorityColor};
  }
`;

export const ListItemActions = styled('div')`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(2)};
`;

export const ListItemCloseButton = styled(IconButton)`
  max-width: 100%;

  color: ${({ theme }) => theme.palette.grey[600]};

  & svg {
    max-width: ${({ theme }) => theme.spacing(4)};
  }
`;
