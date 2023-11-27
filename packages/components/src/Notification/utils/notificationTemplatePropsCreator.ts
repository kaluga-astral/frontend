import { type ToastProps } from 'react-toastify/dist/types';

import { type NotificationTemplateProps } from '../NotificationTemplate';
import { type NotificationProps, type Variant } from '../types';

export const notificationTemplatePropsCreator = (
  options: NotificationProps,
  notifyProps: ToastProps,
  variant: Variant,
): NotificationTemplateProps =>
  <NotificationTemplateProps>{
    ...notifyProps,
    ...options,
    variant,
  };
