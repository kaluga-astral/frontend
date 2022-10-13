import { useEffect } from 'react';

type UseEscapeClickEffectProps = {
  /**
   * @description колбэк который будет вызываться при нажатии на кнопку `esc`
   */
  onEscape?: () => void;
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
 * @description хук клика по кнопке клавиатуры `esc`
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

        onEscape?.();
      }
    };

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isActive]);
};
