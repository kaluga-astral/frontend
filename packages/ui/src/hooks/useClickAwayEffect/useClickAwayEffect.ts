import { RefObject, useEffect } from 'react';

import { CloseEventReason } from '../../types';

export type UseClickAwayListenerOptions = {
  /**
   * @description реф на дом ноду, клик вне которой надо отслеживать
   */
  ref: RefObject<HTMLElement>;
  /**
   * @description колбэк который будет вызываться при нажатии вне рефа
   */
  onClickAway: (e: PointerEvent, reason: CloseEventReason) => void;
  /**
   * @description флаг активности
   */
  isActive: boolean;
  /**
   * @description флаг необходимости предотвращать всплытие, подойдет когда используется внутри модалки
   */
  preventBubbling?: boolean;
};

/**
 * @description хук позволяющий подписаться на клик вне указанного рефа,
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
