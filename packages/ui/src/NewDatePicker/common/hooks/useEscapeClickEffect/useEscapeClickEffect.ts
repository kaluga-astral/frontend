import { useEffect } from 'react';

type UseEscapeClickEffectProps = {
  cb?: () => void;
  isActive: boolean;
};

export const useEscapeClickEffect = ({
  cb,
  isActive,
}: UseEscapeClickEffectProps) => {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const onKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        cb?.();
      }
    };

    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isActive]);
};
