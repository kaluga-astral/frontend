import { useEffect, useState } from 'react';
import { type ToastItem, toast } from 'react-toastify-next';

import { useHover } from '../useHover';
import { type Id } from '../../types';

type UseLogicParams = {
  containerId: Id;
};

export const useLogic = ({
  containerId: externalContainerId,
}: UseLogicParams) => {
  const [toasts, setToasts] = useState<Id[]>([]);

  const container = document.querySelector(
    `#${externalContainerId}`,
  ) as Element;

  const { isHovered: isHoveredContainer } = useHover(container);

  const handleAddToast = ({ id, containerId }: ToastItem) => {
    if (Object.is(containerId, externalContainerId)) {
      setToasts((currentToasts) => [...currentToasts, id]);
    }
  };

  const handleRemoveToast = ({ id, containerId }: ToastItem) => {
    if (Object.is(containerId, externalContainerId)) {
      setToasts((currentToasts) =>
        currentToasts.filter((toastId) => toastId !== id),
      );
    }
  };

  const handleChange = ({ status, ...rest }: ToastItem) => {
    if (Object.is(status, 'added')) {
      handleAddToast({ status, ...rest });
    }

    if (Object.is(status, 'removed')) {
      handleRemoveToast({ status, ...rest });
    }
  };

  useEffect(() => {
    const unsubscribe = toast.onChange(handleChange);

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isHoveredContainer || !container) {
      return undefined;
    }

    const isScroll = container?.scrollHeight > container?.clientHeight;

    if (isScroll) {
      container.scrollTop = container.scrollHeight;
    }
  }, [container, isHoveredContainer]);

  const closeAll = () => {
    toast.dismiss({ containerId: externalContainerId });
  };

  const isVisibleCloseButton = Boolean(toasts.length);

  return { isVisibleCloseButton, isHoveredContainer, closeAll };
};
