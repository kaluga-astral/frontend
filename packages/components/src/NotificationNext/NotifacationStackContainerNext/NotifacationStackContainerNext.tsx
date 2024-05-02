import { type ToastContainerProps } from 'react-toastify-next';
import { injectStyle } from 'react-toastify-next/dist/inject-style';

import {
  NOTIFY_CLASSNAME,
  NOTIFY_CONTAINER_CLASSNAME,
  NOTIFY_POSITIONS,
} from '../constants';

import { useLogic } from './hooks';
import { type Id } from './types';
import { CloseButton, Inner, Wrapper } from './styles';

if (typeof window !== 'undefined') {
  injectStyle();
}

export type NotificationStackContainerProps = Omit<
  ToastContainerProps,
  'containerId' | 'limit' | 'theme' | 'position'
> & {
  containerId: Id;
  loadedContainerId: Id;
  hideProgressBar?: boolean;
};

export const NotificationStackContainerNext = ({
  containerId,
  loadedContainerId,
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
        autoClose={500000}
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
          Скрыть уведомления
        </CloseButton>
      )}

      <Inner
        containerId={loadedContainerId}
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
