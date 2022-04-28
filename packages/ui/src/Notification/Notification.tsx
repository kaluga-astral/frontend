import { toast } from 'react-toastify';

import { NotificationProps } from './types';
import { getNotificationVariant } from './utils';

export const notify = {
  info: (options: NotificationProps) =>
    toast(({ toastProps }) => getNotificationVariant.info(options, toastProps)),
  success: (options: NotificationProps) =>
    toast(({ toastProps }) =>
      getNotificationVariant.success(options, toastProps)
    ),
  warning: (options: NotificationProps) =>
    toast(({ toastProps }) =>
      getNotificationVariant.warning(options, toastProps)
    ),
  error: (options: NotificationProps) =>
    toast(({ toastProps }) =>
      getNotificationVariant.error(options, toastProps)
    ),
};
