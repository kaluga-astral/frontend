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
        className: getClassNameModifierByVariant(
          NotificationVariantTypes.success,
          options.hideProgressBar,
        ),
        transition: leave,
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
        transition: leave,
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

  initProgress: (initialOptions = {}) => {
    let toastId: string | number | undefined;

    return {
      start: (title, options) => {
        if (toastId) {
          return console.warn(
            `Уведомление с идентификатором ${toastId} уже запущено. Для инициализации нового уведомления используйте initProgress`,
          );
        }

        toastId = toast(
          ({ toastProps }) =>
            NOTIFICATION_VARIANT.progress(
              { ...initialOptions, ...options, title, showCloseButton: false },
              toastProps,
            ),
          {
            className: getClassNameModifierByVariant(
              NotificationVariantTypes.progress,
              true,
            ),
            transition: leave,
            icon: false,
            closeButton: false,
            ...getNotifyOptions({ ...initialOptions, isStatic: true }),
          },
        );
      },

      update: (title, options) => {
        if (!toastId) {
          return console.warn(
            'Перед вызовом обновления уведомления, нужно его запустить использую метод start',
          );
        }

        notify.update(toastId, {
          render: ({ toastProps }) =>
            NOTIFICATION_VARIANT.progress(
              {
                ...options,
                title,
                showCloseButton: false,
              },
              toastProps,
            ),
          ...getNotifyOptions({ ...initialOptions, isStatic: true }),
        });
      },

      success: (title, options) => {
        if (!toastId) {
          return console.warn(
            'Перед вызовом обновления уведомления, нужно его запустить использую метод start',
          );
        }

        notify.update(toastId, {
          render: ({ toastProps }) =>
            NOTIFICATION_VARIANT.success({ ...options, title }, toastProps),
          className: getClassNameModifierByVariant(
            NotificationVariantTypes.success,
            true,
          ),
          type: NotificationVariantTypes.success,
          ...getNotifyOptions({ ...initialOptions, isStatic: true }),
        });
      },

      error: (title, options) => {
        if (!toastId) {
          return console.warn(
            'Перед вызовом обновления уведомления, нужно его запустить использую метод start',
          );
        }

        notify.update(toastId, {
          render: ({ toastProps }) =>
            NOTIFICATION_VARIANT.error({ ...options, title }, toastProps),
          className: getClassNameModifierByVariant(
            NotificationVariantTypes.error,
            true,
          ),
          type: NotificationVariantTypes.error,
          ...getNotifyOptions({ ...initialOptions, isStatic: true }),
        });
      },

      stop: () => {
        if (initialOptions?.containerId) {
          toast.dismiss({
            id: toastId,
            containerId: initialOptions.containerId,
          });

          toastId = undefined;

          return;
        }

        toast.dismiss(toastId);
        toastId = undefined;
      },
    };
  },
  custom: toast,
  dismiss: toast.dismiss,
  update: toast.update,
  done: toast.done,
};
