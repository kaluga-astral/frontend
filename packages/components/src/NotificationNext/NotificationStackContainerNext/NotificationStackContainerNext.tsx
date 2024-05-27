import { type ToastContainerProps } from 'react-toastify-next';
import { injectStyle } from 'react-toastify-next/dist/inject-style';

import {
  NOTIFY_CLASSNAME,
  NOTIFY_CONTAINER_CLASSNAME,
  NOTIFY_CONTAINER_ID,
  NOTIFY_POSITIONS,
  NOTIFY_STATIC_CONTAINER_ID,
} from '../constants';

import { useLogic } from './useLogic';
import { type Id } from './types';
import { CloseButton, Inner, Wrapper } from './styles';

if (typeof window !== 'undefined') {
  injectStyle();
}

export type NotificationStackContainerProps = Omit<
  ToastContainerProps,
  'limit' | 'theme' | 'position' | 'stacked'
> & {
  staticContainerId?: Id;
  hideProgressBar?: boolean;
};

export const NotificationStackContainerNext = ({
  containerId = NOTIFY_CONTAINER_ID,
  staticContainerId = NOTIFY_STATIC_CONTAINER_ID,
  closeButton,
  ...props
}: NotificationStackContainerProps) => {
  const { isVisibleCloseButton, isHoveredContainer, closeAll } = useLogic({
    containerId,
  });

  return (
    <Wrapper className={isHoveredContainer ? NOTIFY_CONTAINER_CLASSNAME : ''}>
      <Inner
        {...props}
        stacked
        containerId={containerId}
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

      {isVisibleCloseButton && (
        <CloseButton size="small" variant="light" onClick={closeAll}>
          Закрыть уведомления
        </CloseButton>
      )}

      <Inner
        containerId={staticContainerId}
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
};
