import { toast } from 'react-toastify';

import { type Notify } from './types';
import { NotificationVariantTypes } from './constants';
import { getClassNameModifierByVariant } from './utils';
import { NOTIFICATION_VARIANT } from './NotificationTemplate/constants';

export const notify: Notify = {
  success: (title, { icon, ...options } = {}) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.success({ ...options, icon, title }, toastProps),
      {
        className: getClassNameModifierByVariant(
          NotificationVariantTypes.success,
          options.hideProgressBar,
        ),
        ...options,
      },
    ),
  info: (title, { icon, ...options } = {}) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.info({ ...options, icon, title }, toastProps),
      {
        className: getClassNameModifierByVariant(
          NotificationVariantTypes.info,
          options.hideProgressBar,
        ),
        ...options,
      },
    ),
  warning: (title, { icon, ...options } = {}) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.warning({ ...options, icon, title }, toastProps),
      {
        className: getClassNameModifierByVariant(
          NotificationVariantTypes.warning,
          options.hideProgressBar,
        ),
        ...options,
      },
    ),
  error: (title, { icon, ...options } = {}) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.error({ ...options, icon, title }, toastProps),
      {
        className: getClassNameModifierByVariant(
          NotificationVariantTypes.error,
          options.hideProgressBar,
        ),
        ...options,
      },
    ),
  custom: toast,
  dismiss: toast.dismiss,
  update: toast.update,
  done: toast.done,
};
