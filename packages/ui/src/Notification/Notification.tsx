import { toast } from 'react-toastify';

import { NotificationProps, Variant } from './types';
import { NOTIFICATION_VARIANT } from './constants';

interface NotificationOptions extends Omit<NotificationProps, 'title'> {}

export type Notify = (
  title: string,
  options?: NotificationOptions,
) => number | string;

export const notify: Record<Variant, Notify> = {
  info: (title, options) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.info({ ...options, title }, toastProps),
      options,
    ),
  success: (title, options) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.success({ ...options, title }, toastProps),
      options,
    ),
  warning: (title, options) =>
    toast(({ toastProps }) =>
      NOTIFICATION_VARIANT.warning({ ...options, title }, toastProps),
    ),
  error: (title, options) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.error({ ...options, title }, toastProps),
      options,
    ),
};
