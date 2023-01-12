import { ToastProps } from 'react-toastify/dist/types';

import { NotificationTemplate } from '../NotificationTemplate';
import { NotificationProps, Variant } from '../types';
import { notificationTemplatePropsCreator } from '../utils';

type NotifyAction = (
  options: NotificationProps,
  notifyProps: ToastProps,
) => JSX.Element;

export enum NotificationVariantTypes {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export const NOTIFICATION_VARIANT: Record<Variant, NotifyAction> = {
  info: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.info,
      )}
    />
  ),
  success: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.success,
      )}
    />
  ),
  warning: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.warning,
      )}
    />
  ),
  error: (options, notifyContent) => (
    <NotificationTemplate
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.error,
      )}
    />
  ),
};
