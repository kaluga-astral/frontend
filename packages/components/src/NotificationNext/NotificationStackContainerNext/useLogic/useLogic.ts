import { useEffect, useState } from 'react';
import { type ToastItem, toast } from 'react-toastify-next';

import { sleep } from '../../utils';
import { type Id } from '../types';

import { useHover } from './hooks';

type UseLogicParams = {
  containerId: Id;
};

export const useLogic = ({
  containerId: externalContainerId,
}: UseLogicParams) => {
  const [toasts, setToasts] = useState<Id[]>([]);
  const [container, setContainer] = useState<Element | null>();

  useEffect(() => {
    if (toasts.length) {
      const scrollContainer = document.querySelector(
        `#${externalContainerId} .Toastify__toast-container`,
      ) as Element;

      setContainer(scrollContainer);
    }
  }, [externalContainerId, toasts]);

  const { isHovered: isHoveredContainer } = useHover(container as Element);

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
      return;
    }

    (async () => {
      const hasScroll = container?.scrollHeight > container?.clientHeight;

      if (hasScroll) {
        await sleep(200);

        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        });
      }
    })();
  }, [container, isHoveredContainer]);

  const closeAll = () => {
    toast.dismiss({ containerId: externalContainerId });
  };

  const isVisibleCloseButton = Boolean(toasts.length);

  return { isVisibleCloseButton, isHoveredContainer, closeAll };
};
