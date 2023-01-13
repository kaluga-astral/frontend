import { ToastContainerProps } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { NOTIFY_CLASSNAME, NOTIFY_POSITIONS } from '../constants';

import { NotificationContainerInner, NotificationsWrapper } from './styles';

if (typeof window !== 'undefined') {
  injectStyle();
}

export type NotificationContainerProps = Omit<ToastContainerProps, 'theme'> & {
  hideProgressBar?: boolean;
};

export const NotificationContainer = (props: NotificationContainerProps) => (
  <NotificationsWrapper>
    <NotificationContainerInner
      {...props}
      pauseOnFocusLoss
      position={NOTIFY_POSITIONS.BOTTOM_RIGHT}
      newestOnTop={false}
      closeOnClick={false}
      draggable={false}
      rtl={false}
      closeButton={false}
      bodyClassName={`${NOTIFY_CLASSNAME}__body`}
      toastClassName={NOTIFY_CLASSNAME}
      progressClassName={`${NOTIFY_CLASSNAME}__progress`}
    />
  </NotificationsWrapper>
);
