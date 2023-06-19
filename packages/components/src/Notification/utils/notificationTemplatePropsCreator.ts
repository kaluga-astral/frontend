import { ToastProps } from 'react-toastify/dist/types';

import { NotificationTemplateProps } from '../NotificationTemplate';
import { NotificationProps, Variant } from '../types';

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
