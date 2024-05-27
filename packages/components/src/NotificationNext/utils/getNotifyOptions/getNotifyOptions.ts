import {
  NOTIFY_CONTAINER_ID,
  NOTIFY_STATIC_CONTAINER_ID,
} from '../../constants';
import { type NotificationProps } from '../../types';

type NotifyOptions = Omit<NotificationProps, 'icon' | 'title'>;

const getContainerId = ({
  containerId,
  isStatic,
}: Pick<NotifyOptions, 'containerId' | 'isStatic'>) => {
  if (containerId) {
    return containerId;
  }

  return isStatic ? NOTIFY_STATIC_CONTAINER_ID : NOTIFY_CONTAINER_ID;
};

export const getNotifyOptions = ({
  isStatic,
  containerId,
  hideProgressBar,
  autoClose,
  ...options
}: NotifyOptions) => ({
  containerId: getContainerId({ containerId, isStatic }),
  hideProgressBar: isStatic || hideProgressBar,
  autoClose: isStatic ? false : autoClose,
  ...options,
});
