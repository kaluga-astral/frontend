import { useEffect } from 'react';

type UseEscapeClickEffectProps = {
  cb?: () => void;
  isActive: boolean;
  preventBubbling?: boolean;
};

export const useEscapeClickEffect = ({
  cb,
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

        cb?.();
      }
    };

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isActive]);
};
