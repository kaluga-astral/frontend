import { type ToastProps } from 'react-toastify-next/dist/types';

import { NotificationVariantTypes } from '../constants';
import { getNotificationTemplateProps } from '../utils';
import { type NotificationProps, type Variant } from '../types';

import { NotificationTemplateNext } from './NotificationTemplateNext';

type NotifyAction = (
  options: NotificationProps,
  notifyProps: ToastProps,
) => JSX.Element;

export const NOTIFICATION_VARIANT: Record<Variant, NotifyAction> = {
  info: (options, notifyContent) => (
    <NotificationTemplateNext
      {...getNotificationTemplateProps(
        options,
        notifyContent,
        NotificationVariantTypes.info,
      )}
    />
  ),
  success: (options, notifyContent) => (
    <NotificationTemplateNext
      {...getNotificationTemplateProps(
        options,
        notifyContent,
        NotificationVariantTypes.success,
      )}
    />
  ),
  warning: (options, notifyContent) => (
    <NotificationTemplateNext
      {...getNotificationTemplateProps(
        options,
        notifyContent,
        NotificationVariantTypes.warning,
      )}
    />
  ),
  error: (options, notifyContent) => (
    <NotificationTemplateNext
      {...getNotificationTemplateProps(
        options,
        notifyContent,
        NotificationVariantTypes.error,
      )}
    />
  ),
  progress: (options, notifyContent) => (
    <NotificationTemplateNext
      {...getNotificationTemplateProps(
        options,
        notifyContent,
        NotificationVariantTypes.progress,
      )}
    />
  ),
};
