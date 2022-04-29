import { IconButton } from '../../../IconButton';
import { styled } from '../../../styles';
import { Typography } from '../../../Typography';
import { ActionsDirection, Variant } from '../../types';

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

export const NotificationIcon = styled.section<NotificationIconProps>`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(3)};

  & > svg {
    & > path {
      fill: ${({ theme, filled }) =>
        filled && theme.palette.background.default};
    }
  }
`;

export const NotificationHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NotificationCloseButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'filled',
})<NotificationCloseButtonProps>`
  height: inherit;
  padding: 0;

  & > svg {
    & > path {
      fill: ${({ theme, filled }) =>
        filled && theme.palette.background.default};
    }
  }

  &:hover {
    background-color: ${({ filled }) => filled && 'inherit'};
  }
`;

export const NotificationTitle = styled(Typography)`
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing(1)};

  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
`;
