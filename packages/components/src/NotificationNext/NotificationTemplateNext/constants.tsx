import { type ToastProps } from 'react-toastify-next/dist/types';

import { NotificationVariantTypes } from '../constants';
import { notificationTemplatePropsCreator } from '../utils';
import { type NotificationProps, type Variant } from '../types';

import { NotificationTemplateNext } from './NotificationTemplateNext';

type NotifyAction = (
  options: NotificationProps,
  notifyProps: ToastProps,
) => JSX.Element;

export const NOTIFICATION_VARIANT: Record<Variant, NotifyAction> = {
  info: (options, notifyContent) => (
    <NotificationTemplateNext
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.info,
      )}
    />
  ),
  success: (options, notifyContent) => (
    <NotificationTemplateNext
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.success,
      )}
    />
  ),
  warning: (options, notifyContent) => (
    <NotificationTemplateNext
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.warning,
      )}
    />
  ),
  error: (options, notifyContent) => (
    <NotificationTemplateNext
      {...notificationTemplatePropsCreator(
        options,
        notifyContent,
        NotificationVariantTypes.error,
      )}
    />
  ),
};
