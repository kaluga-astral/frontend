import { useEffect, useState } from 'react';
import { type ToastItem, toast } from 'react-toastify-next';

import { sleep } from '../../utils';
import { NOTIFY_CLASSNAME, NOTIFY_NO_TRANSITION_ATTR } from '../../constants';
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
  const [isStartedClosingNotify, setStartedClosingNotify] =
    useState<boolean>(false);

  useEffect(() => {
    if (toasts.length) {
      const scrollContainer = document.querySelector(
        `#${externalContainerId} .Toastify__toast-container`,
      ) as Element;

      setContainer(scrollContainer);
    }
  }, [externalContainerId, toasts]);

  // Ориентируемся на data-атрибут для отключении анимации стека при добавлении нового уведомления
  const handleAddNoTransitionAttr = () => {
    const elements = document.querySelectorAll(`.${NOTIFY_CLASSNAME}`);

    elements.forEach((element) =>
      element.setAttribute(NOTIFY_NO_TRANSITION_ATTR, 'true'),
    );
  };

  const handleRemoveNoTransitionAttr = () => {
    const elements = document.querySelectorAll(
      `.${NOTIFY_CLASSNAME}[${NOTIFY_NO_TRANSITION_ATTR}='true']`,
    );

    elements.forEach((element) =>
      element.removeAttribute(NOTIFY_NO_TRANSITION_ATTR),
    );
  };

  useEffect(() => {
    handleRemoveNoTransitionAttr();

    // Синхронизирует скрытие кнопки при ручном закрытии всех уведомлений
    if (!toasts.length) {
      setStartedClosingNotify(false);
    }
  }, [toasts]);

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
      handleAddNoTransitionAttr();
      // Снимаем флаг запуска анимации на закрытие, если происходит добавление уведомлений.
      // Позволяет решить проблему отображения кнопки закрытия уведомлений,
      // при условии что пользователь нажал на нее, но новые уведомления продолжают появляться
      setStartedClosingNotify(false);
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
      // Ожидаем пока отработает анимация и стек с уведомлениями раскроется
      await sleep(300);

      const hasScroll = container?.scrollHeight > container?.clientHeight;

      if (hasScroll) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        });
      }
    })();
  }, [container, isHoveredContainer]);

  const closeAll = () => {
    setStartedClosingNotify(true);
    toast.dismiss({ containerId: externalContainerId });
  };

  const hasOpenNotify = Boolean(toasts.length);

  return {
    isVisibleCloseButton: hasOpenNotify,
    isHoveredContainer: isHoveredContainer && hasOpenNotify,
    isStartedClosingNotify,
    closeAll,
  };
};
