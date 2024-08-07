import { useEffect } from 'react';

import { type CloseEventReason } from '../../types';

export type UseEscapeClickEffectProps = {
  /**
   * колбэк который будет вызываться при нажатии на кнопку `esc`
   */
  onEscape?: (event: Event, reason: CloseEventReason) => void;
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
 * хук клика по кнопке клавиатуры `esc`
 */
export const useEscapeClickEffect = ({
  onEscape,
  isActive,
  preventBubbling,
}: UseEscapeClickEffectProps) => {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const onKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        if (preventBubbling) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }

        onEscape?.(e, 'escape');
      }
    };

    window.addEventListener('keydown', onKeydown, true);

    return () => {
      window.removeEventListener('keydown', onKeydown, true);
    };
  }, [isActive]);
};
