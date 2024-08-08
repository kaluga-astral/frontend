import { type RefObject, useEffect } from 'react';

import { type CloseEventReason } from '../../types';

export type UseClickAwayListenerOptions = {
  /**
   * реф на дом ноду, клик вне которой надо отслеживать
   */
  ref: RefObject<HTMLElement>;
  /**
   * колбэк который будет вызываться при нажатии вне рефа
   */
  onClickAway: (e: PointerEvent, reason: CloseEventReason) => void;
  /**
   * флаг активности
   */
  isActive: boolean;
  /**
   * флаг необходимости предотвращать всплытие, подойдет когда используется внутри модалки
   */
  preventBubbling?: boolean;
};

/**
 * хук позволяющий подписаться на клик вне указанного рефа,
 * подойдет для использования в кастомных попперах
 */
export const useClickAwayEffect = ({
  ref,
  onClickAway,
  preventBubbling,
  isActive,
}: UseClickAwayListenerOptions) => {
  useEffect(() => {
    const node = ref?.current;

    if (!isActive || !node) {
      return;
    }

    const onClick = (e: PointerEvent) => {
      if (!node.contains(e.target as HTMLElement)) {
        if (preventBubbling) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }

        onClickAway(e, 'clickAway');
      }
    };

    window.addEventListener('pointerdown', onClick);

    return () => {
      window.removeEventListener('pointerdown', onClick);
    };
  }, [isActive, ref]);
};
