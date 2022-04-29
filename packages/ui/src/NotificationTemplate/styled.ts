import { CrossOutlineSm } from '@astral/icons';

import { IconButton } from '../IconButton';
import { ActionsDirection, Variant } from '../Notification';
import { styled } from '../styles';
import { Typography } from '../Typography';

import { getActionsDirection, getNotificationTemplateStyles } from './utils';

interface NotificationCloseButtonProps {
  filled: boolean;
}

interface NotificationIconProps {
  filled: boolean;
}

interface NotificationTemplateProps {
  variant: Variant;
  filled: boolean;
}

interface NotificationActionsProps {
  actionsDirection: ActionsDirection;
}

interface NotificationCloseIconProps {
  filled: boolean;
}

export const NotificationTemplate = styled.section<NotificationTemplateProps>`
  padding: ${({ theme }) => theme.spacing(4)};

  ${({ theme, variant, filled }) =>
    getNotificationTemplateStyles(theme, variant, filled)}
`;

export const NotificationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const NotificationActions = styled.footer<NotificationActionsProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ actionsDirection }) =>
    getActionsDirection(actionsDirection)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const NotificationIcon = styled.div<NotificationIconProps>`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(3)};
`;

export const NotificationHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NotificationCloseIcon = styled(CrossOutlineSm, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationCloseIconProps>`
  color: ${({ theme, filled }) => filled && theme.palette.background.default};
`;

export const NotificationCloseButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationCloseButtonProps>`
  padding: 0;

  &:hover {
    background-color: ${({ filled }) => filled && 'inherit'};
  }
`;

export const NotificationTitle = styled(Typography)`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(1)};

  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;
