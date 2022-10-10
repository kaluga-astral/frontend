import { useEffect } from 'react';

type UseEscapeClickEffectProps = {
  onEscape?: () => void;
  isActive: boolean;
  preventBubbling?: boolean;
};

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
