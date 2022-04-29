import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';
import { ToastProps } from 'react-toastify/dist/types';

import { NotificationTemplate } from '../components/NotificationTemplate';
import { notificationTemplatePropsCreator } from '../components/NotificationTemplate/utils';
// import {
//   ErrorNotificationIcon,
//   InfoNotificationIcon,
//   SuccessNotificationIcon,
//   WarningNotificationIcon,
// } from '../styled';
import { NotificationProps, Variant } from '../types';

type NotifyAction = (
  options: NotificationProps,
  notifyProps: ToastProps
) => JSX.Element;

// const getNotificationIconByVariant = (
//   variant: Variant,
//   filled: boolean = false
// ): JSX.Element => {
//   const mapOfNotificationIcons = {
//     info: <InfoNotificationIcon filled={filled} />,
//     success: <SuccessNotificationIcon filled={filled} />,
//     warning: <WarningNotificationIcon filled={filled} />,
//     error: <ErrorNotificationIcon filled={filled} />,
//   };
//
//   return mapOfNotificationIcons[variant];
// };

export const NOTIFICATION_VARIANT: Record<Variant, NotifyAction> = {
  info: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'info')}
      icon={<InfoFillMd />}
    />
  ),
  success: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'success')}
      icon={<SuccessFillMd />}
    />
  ),
  warning: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'warning')}
      icon={<WarningFillMd />}
    />
  ),
  error: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'error')}
      icon={<ErrorFillMd />}
    />
  ),
};
