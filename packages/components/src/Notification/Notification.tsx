import {
  Id,
  ToastContent,
  ToastOptions,
  UpdateOptions,
  toast,
} from 'react-toastify';

import { NotificationProps, Variant } from './types';
import { NotificationVariantTypes } from './constants';
import { getClassNameModifierByVariant } from './utils';
import { NOTIFICATION_VARIANT } from './NotificationTemplate/constants';

type NotificationOptions = Omit<NotificationProps, 'title'>;

export type Notify = (
  title: NotificationProps['title'],
  options?: NotificationOptions,
) => number | string;

type Controllable = {
  /**
   * @description метод создания полностью кастомной нотификации
   */
  custom: (content: ToastContent, options?: ToastOptions) => Id;
  /**
   * @description force метод для закрытия всех нотификаций, либо конкретной по айдишке
   */
  dismiss: (id?: Id) => void;
  /**
   * @description метод обновления конкретной нотификации,
   * пригодится когда имеется контролируемый прогресс бар
   */
  update: (id: Id, options?: UpdateOptions) => void;
  /**
   * @description метод закрывающий нотификацию с контролируемым прогресс баром
   */
  done: (id: Id) => void;
};

export const notify: Record<Variant, Notify> & Controllable = {
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
