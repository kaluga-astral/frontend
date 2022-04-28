import { FC, ReactNode, useMemo } from 'react';
import { CrossOutlineSm } from '@astral/icons';
import { ToastProps } from 'react-toastify/dist/types';

import { ActionsDirection, Variant } from '../../types';

import {
  NotificationActions,
  NotificationCloseButton,
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

export const NotificationTemplate: FC<NotificationTemplateProps> = ({
  icon,
  title,
  closeToast,
  content,
  actions,
  variant,
  filled = true,
  actionsDirection = 'right',
}) => {
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
            <CrossOutlineSm />
          </NotificationCloseButton>
        </NotificationHeader>
      </NotificationWrapper>
      {content && Content}
      {actions && Actions}
    </StyledNotificationTemplate>
  );
};
