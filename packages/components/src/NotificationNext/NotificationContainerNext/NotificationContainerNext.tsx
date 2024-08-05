import { type ToastContainerProps } from 'react-toastify-next';
import { injectStyle } from 'react-toastify-next/dist/inject-style';

import {
  NOTIFY_CLASSNAME,
  NOTIFY_CONTAINER_ID,
  NOTIFY_POSITIONS,
} from '../constants';
import { useViewportType } from '../../hooks/useViewportType';

import { Inner, Wrapper } from './styles';

if (typeof window !== 'undefined') {
  injectStyle();
}

export type NotificationContainerProps = Omit<
  ToastContainerProps,
  'theme' | 'stacked'
> & {
  hideProgressBar?: boolean;
};

export const NotificationContainerNext = ({
  containerId = NOTIFY_CONTAINER_ID,
  ...props
}: NotificationContainerProps) => {
  const { isMobile } = useViewportType();

  console.log(
    'render NotificationContainerNext',
    NOTIFY_CONTAINER_ID,
    isMobile,
  );

  return (
    <Wrapper>
      <Inner
        {...props}
        containerId={containerId}
        pauseOnFocusLoss
        position={
          isMobile ? NOTIFY_POSITIONS.TOP_CENTER : NOTIFY_POSITIONS.BOTTOM_RIGHT
        }
        newestOnTop={true}
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
};
