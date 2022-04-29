import { toast } from 'react-toastify';

import { NotificationProps } from './types';
import { NOTIFICATION_VARIANT } from './constants';

export const notify = {
  info: (options: NotificationProps) =>
    toast(({ toastProps }) => NOTIFICATION_VARIANT.info(options, toastProps)),
  success: (options: NotificationProps) =>
    toast(({ toastProps }) =>
      NOTIFICATION_VARIANT.success(options, toastProps)
    ),
  warning: (options: NotificationProps) =>
    toast(({ toastProps }) =>
      NOTIFICATION_VARIANT.warning(options, toastProps)
    ),
  error: (options: NotificationProps) =>
    toast(({ toastProps }) => NOTIFICATION_VARIANT.error(options, toastProps)),
};
