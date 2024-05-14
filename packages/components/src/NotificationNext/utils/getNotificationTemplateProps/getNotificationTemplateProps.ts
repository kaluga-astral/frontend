import { type ToastProps } from 'react-toastify-next/dist/types';

import { type NotificationTemplateProps } from '../../NotificationTemplateNext';
import { type NotificationProps, type Variant } from '../../types';

export const getNotificationTemplateProps = (
  options: NotificationProps,
  notifyProps: ToastProps,
  variant: Variant,
): NotificationTemplateProps =>
  <NotificationTemplateProps>{
    ...notifyProps,
    ...options,
    variant,
  };
