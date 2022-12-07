import { RefObject, useEffect } from 'react';

import { Reason } from '../../types';

export type UseAwayClickListenerOptions = {
  /**
   * @description реф на дом ноду, клик вне которой надо отслеживать
   */
  ref: RefObject<HTMLElement>;
  /**
   * @description колбэк который будет вызываться при нажатии вне рефа
   */
  onAwayClick: (e: PointerEvent, reason: Reason) => void;
  /**
   * @description флаг активности
   */
  isActive: boolean;
  /**
   * @description флаг необходимости предотвращать всплытие, подойдет когда используется внутри модалки
   */
  preventBubbling?: boolean;
};

export const useAwayClickEffect = ({
  ref,
  onAwayClick,
  preventBubbling,
  isActive,
}: UseAwayClickListenerOptions) => {
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

        onAwayClick?.(e, 'awayClick');
      }
    };

    window.addEventListener('pointerdown', onClick);

    return () => {
      window.removeEventListener('pointerdown', onClick);
    };
  }, [isActive, ref]);
};
