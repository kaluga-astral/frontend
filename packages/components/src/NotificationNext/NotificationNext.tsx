import { cssTransition, toast } from 'react-toastify-next';

import { type Notify } from './types';
import {
  NOTIFY_ANIMATION_IN_CLASSNAME,
  NOTIFY_ANIMATION_OUT_CLASSNAME,
  NotificationVariantTypes,
} from './constants';
import { getClassNameModifierByVariant, getNotifyOptions } from './utils';
import { NOTIFICATION_VARIANT } from './NotificationTemplateNext/constants';

const leave = cssTransition({
  enter: NOTIFY_ANIMATION_IN_CLASSNAME,
  exit: NOTIFY_ANIMATION_OUT_CLASSNAME,
});

export const notify: Notify = {
  success: (title, { icon, ...options } = {}) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.success({ ...options, icon, title }, toastProps),
      {
        ...getNotifyOptions({ ...options }),
      },
    ),
  info: (title, { icon, ...options } = {}) =>
    toast(
      ({ toastProps }) =>
        NOTIFICATION_VARIANT.info({ ...options, icon, title }, toastProps),
      {
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
        transition: leave,
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
        transition: leave,
        ...getNotifyOptions({ ...options }),
      },
    ),
  custom: toast,
  dismiss: toast.dismiss,
  update: toast.update,
  done: toast.done,
};
