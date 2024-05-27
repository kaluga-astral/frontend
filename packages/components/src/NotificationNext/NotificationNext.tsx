import { toast } from 'react-toastify-next';

import { type Notify } from './types';
import { NotificationVariantTypes } from './constants';
import { getClassNameModifierByVariant, getNotifyOptions } from './utils';
import { NOTIFICATION_VARIANT } from './NotificationTemplateNext/constants';

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
        ...getNotifyOptions({ ...options }),
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
        ...getNotifyOptions({ ...options }),
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
        ...getNotifyOptions({ ...options }),
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
        ...getNotifyOptions({ ...options }),
      },
    ),
  custom: toast,
  dismiss: toast.dismiss,
  update: toast.update,
  done: toast.done,
};
