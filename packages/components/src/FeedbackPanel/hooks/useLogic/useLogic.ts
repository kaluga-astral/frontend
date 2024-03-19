import { useEffect, useRef } from 'react';

import { DURATION_SHOW_SUCCESS_SCREEN_MS } from '../../constants';

type UseLogicParams = {
  isOpen?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  endHook: () => void;
};

export const useLogic = ({
  isOpen,
  isLoading,
  isError,
  endHook,
}: UseLogicParams) => {
  // Храним предыдущее состояния лоадера. Для isSuccess=true из isLoading должен быть false
  // Но так как это его изначальное состояние, отслеживаем было ли оно в состоянии true
  const prevLoading = useRef<boolean>();

  const isSuccess = !isError && !isLoading && prevLoading.current;

  useEffect(() => {
    if (isLoading && !prevLoading.current) {
      prevLoading.current = true;
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isSuccess) {
      return undefined;
    }

    const timer = setTimeout(() => {
      prevLoading.current = false;

      if (typeof endHook === 'function') {
        endHook();
      }
    }, DURATION_SHOW_SUCCESS_SCREEN_MS);

    // Если закрыли вручную, то сбрасываем закрытие по таймеру
    if (!isOpen) {
      prevLoading.current = false;
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [isSuccess, isOpen, endHook]);

  return { isSuccess };
};
