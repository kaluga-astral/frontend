import { ToastProps } from 'react-toastify/dist/types';

import { NotificationTemplate } from '../NotificationTemplate';
import { NotificationProps, Variant } from '../types';
import {
  getNotificationIconByVariant,
  notificationTemplatePropsCreator,
} from '../utils';

type NotifyAction = (
  options: NotificationProps,
  notifyProps: ToastProps,
) => JSX.Element;

export const NOTIFICATION_VARIANT: Record<Variant, NotifyAction> = {
  info: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'info')}
      icon={getNotificationIconByVariant('info', options.filled)}
    />
  ),
  success: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'success')}
      icon={getNotificationIconByVariant('success', options.filled)}
    />
  ),
  warning: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'warning')}
      icon={getNotificationIconByVariant('warning', options.filled)}
    />
  ),
  error: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(options, notifyContent, 'error')}
      icon={getNotificationIconByVariant('error', options.filled)}
    />
  ),
};
