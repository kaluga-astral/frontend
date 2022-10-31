import { ReactNode, useMemo } from 'react';
import { ToastProps } from 'react-toastify/dist/types';

import { DEFAULT_NOTIFICATION_PROPS } from '../constants';
import { ActionsDirection, Variant } from '../types';

import {
  NotificationActions,
  NotificationCloseButton,
  NotificationCloseIcon,
  NotificationContent,
  NotificationHeader,
  NotificationIcon,
  NotificationTitle,
  NotificationWrapper,
  NotificationTemplate as StyledNotificationTemplate,
} from './styled';

export interface NotificationTemplateProps extends ToastProps {
  icon: JSX.Element;
  title: string;
  filled?: boolean;
  variant: Variant;
  content?: ReactNode;
  actions?: JSX.Element;
  actionsDirection?: ActionsDirection;
}

export const NotificationTemplate = ({
  icon,
  title,
  closeToast,
  content,
  actions,
  variant,
  filled = DEFAULT_NOTIFICATION_PROPS.filled,
  actionsDirection = 'right',
}: NotificationTemplateProps) => {
  const handleCloseToast = () => {
    if (closeToast) {
      closeToast();
    }
  };

  const Content = useMemo(() => {
    return <NotificationContent>{content}</NotificationContent>;
  }, [content]);

  const Actions = useMemo(() => {
    return (
      <NotificationActions actionsDirection={actionsDirection}>
        {actions}
      </NotificationActions>
    );
  }, [actions, actionsDirection]);

  return (
    <StyledNotificationTemplate variant={variant} filled={filled}>
      <NotificationWrapper>
        <NotificationIcon filled={filled}>{icon}</NotificationIcon>
        <NotificationHeader>
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationCloseButton
            filled={filled}
            onClick={handleCloseToast}
            color="primary"
            variant="text"
          >
            <NotificationCloseIcon filled={filled} />
          </NotificationCloseButton>
        </NotificationHeader>
      </NotificationWrapper>
      {content && Content}
      {actions && Actions}
    </StyledNotificationTemplate>
  );
};
