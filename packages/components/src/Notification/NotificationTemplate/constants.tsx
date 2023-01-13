import { ToastProps } from 'react-toastify/dist/types';

import { NotificationVariantTypes } from '../constants';
import { notificationTemplatePropsCreator } from '../utils';
import { NotificationProps, Variant } from '../types';

import { NotificationTemplate } from './NotificationTemplate';

type NotifyAction = (
  options: NotificationProps,
  notifyProps: ToastProps,
) => JSX.Element;

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
