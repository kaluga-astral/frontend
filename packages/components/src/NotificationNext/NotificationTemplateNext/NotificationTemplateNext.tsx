import { type ReactNode } from 'react';
import { type ToastProps } from 'react-toastify-next/dist/types';

import { CircularProgress } from '../../CircularProgress';
import { NOTIFY_CLASSNAME } from '../constants';
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
  IconWrapper,
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
  progress: InfoNotificationIcon,
};

type DefaultIconProps = {
  variant: Variant;
  filled: boolean;
};

const DefaultIcon = ({ variant, filled }: DefaultIconProps) => {
  if (Object.is(variant, 'progress')) {
    return <CircularProgress color="primary" size="medium" />;
  }

  const Icon = mapOfNotificationIcons[variant];

  return <Icon $filled={filled} />;
};

export const NotificationTemplateNext = ({
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
      <Header>
        <IconWrapper>
          {icon || <DefaultIcon filled={filled} variant={variant} />}
        </IconWrapper>

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

      {content && (
        <Content className={`${NOTIFY_CLASSNAME}__content`}>{content}</Content>
      )}

      {actions && (
        <Footer
          actionsDirection={actionsDirection}
          className={`${NOTIFY_CLASSNAME}__footer`}
        >
          {actions}
        </Footer>
      )}
    </Wrapper>
  );
};
