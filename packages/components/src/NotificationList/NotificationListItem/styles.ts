import { styled } from '../../styles';
import { Typography } from '../../Typography';
import { type Theme } from '../../theme';
import { NotificationPriorities } from '../enums';
import { IconButton } from '../../IconButton';
import { type NotificationPriority } from '../types';

const getPriorityColor = ({
  theme,
  priority,
}: {
  theme: Theme;
  priority?: NotificationPriority;
}) => {
  if (priority === NotificationPriorities.important) {
    return theme.palette.yellow[800];
  }

  if (priority === NotificationPriorities.critical) {
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

export const ListItemTitle = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  line-height: ${({ theme }) => theme.typography.pxToRem(20)};
  color: ${({ theme }) => theme.palette.grey[900]};
`;

export const ListItemDate = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  line-height: ${({ theme }) => theme.typography.pxToRem(20)};
  color: ${({ theme }) => theme.palette.grey[600]};
`;

export const ListItemPriority = styled('div')<{
  priority: NotificationPriority;
}>`
  width: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(2)};

  background-color: ${getPriorityColor};
  border-radius: 50%;
`;

export const ListItemIconSlot = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
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
