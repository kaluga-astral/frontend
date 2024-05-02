import { type ToastContainerProps } from 'react-toastify-next';
import { injectStyle } from 'react-toastify-next/dist/inject-style';

import { NOTIFY_CLASSNAME, NOTIFY_POSITIONS } from '../constants';

import { Inner, Wrapper } from './styles';

if (typeof window !== 'undefined') {
  injectStyle();
}

export type NotificationContainerProps = Omit<ToastContainerProps, 'theme'> & {
  hideProgressBar?: boolean;
};

export const NotificationContainerNext = (
  props: NotificationContainerProps,
) => (
  <Wrapper>
    <Inner
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
  </Wrapper>
);
