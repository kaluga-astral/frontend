import { ToastProps } from 'react-toastify/dist/types';

import { NotificationProps, Variant } from '../../../../types';
import { NotificationTemplateProps } from '../../NotificationTemplate';

export const notificationTemplatePropsCreator = (
  options: NotificationProps,
  notifyProps: ToastProps,
  variant: Variant
): NotificationTemplateProps => {
  return <NotificationTemplateProps>{
    ...options,
    ...notifyProps,
    variant,
  };
};
