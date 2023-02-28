import { ReactNode } from 'react';
import { ToastProps } from 'react-toastify/dist/types';

import { ActionsDirection, Variant } from '../types';
import {
  ErrorNotificationIcon,
  InfoNotificationIcon,
  SuccessNotificationIcon,
  WarningNotificationIcon,
} from '../styles';

import {
  NotificationCloseButton,
  NotificationCloseIcon,
  NotificationContent,
  NotificationFooter,
  NotificationHeader,
  NotificationIcon,
  NotificationInner,
  NotificationTemplateWrapper,
  NotificationTitle,
} from './styles';

export type NotificationTemplateProps = ToastProps & {
  icon?: JSX.Element;
  title: string;
  filled?: boolean;
  variant: Variant;
  content?: ReactNode;
  actions?: JSX.Element;
  actionsDirection?: ActionsDirection;
  showCloseButton?: boolean;
};

const mapOfNotificationIcons = {
  info: InfoNotificationIcon,
  success: SuccessNotificationIcon,
  warning: WarningNotificationIcon,
  error: ErrorNotificationIcon,
};

type DefaultIconProps = {
  variant: Variant;
  filled: boolean;
};

const DefaultIcon = ({ variant, filled }: DefaultIconProps) => {
  const Icon = mapOfNotificationIcons[variant];

  return <Icon filled={filled} />;
};

export const NotificationTemplate = ({
  icon,
  title,
  closeToast,
  content,
  actions,
  variant,
  filled = false,
  actionsDirection = 'right',
  showCloseButton = true,
}: NotificationTemplateProps) => {
  const handleCloseToast = () => closeToast?.();

  return (
    <NotificationTemplateWrapper variant={variant} filled={filled}>
      <NotificationIcon>
        {icon || <DefaultIcon filled={filled} variant={variant} />}
      </NotificationIcon>
      <NotificationInner>
        <NotificationHeader>
          <NotificationTitle>{title}</NotificationTitle>
          {showCloseButton && (
            <NotificationCloseButton
              filled={filled}
              onClick={handleCloseToast}
              color="primary"
              variant="text"
            >
              <NotificationCloseIcon filled={filled} />
            </NotificationCloseButton>
          )}
        </NotificationHeader>
        {content && <NotificationContent>{content}</NotificationContent>}
        {actions && (
          <NotificationFooter actionsDirection={actionsDirection}>
            {actions}
          </NotificationFooter>
        )}
      </NotificationInner>
    </NotificationTemplateWrapper>
  );
};
