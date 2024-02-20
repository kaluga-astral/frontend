import { type ReactNode } from 'react';
import { type ToastProps } from 'react-toastify/dist/types';

import { type ActionsDirection, type Variant } from '../types';
import {
  ErrorNotificationIcon,
  InfoNotificationIcon,
  SuccessNotificationIcon,
  WarningNotificationIcon,
} from '../styles';

import {
  CloseButton,
  CloseIcon,
  Content,
  Footer,
  Header,
  Icon,
  Inner,
  Title,
  Wrapper,
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
    <Wrapper variant={variant} filled={filled}>
      <Icon>{icon || <DefaultIcon filled={filled} variant={variant} />}</Icon>
      <Inner>
        <Header>
          <Title>{title}</Title>
          {showCloseButton && (
            <CloseButton
              filled={filled}
              onClick={handleCloseToast}
              color="primary"
              variant="text"
            >
              <CloseIcon filled={filled} />
            </CloseButton>
          )}
        </Header>
        {content && <Content>{content}</Content>}
        {actions && (
          <Footer actionsDirection={actionsDirection}>{actions}</Footer>
        )}
      </Inner>
    </Wrapper>
  );
};
