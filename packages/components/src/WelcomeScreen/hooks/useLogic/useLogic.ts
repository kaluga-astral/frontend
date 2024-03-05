import { useEffect, useRef, useState } from 'react';

import {
  ALL_DURATION_MS,
  LOADING_DISPLAY_DELAY_MS,
  SESSION_KEY,
} from '../../constants';

type UseLogicParams = { isLoading?: boolean; isError?: boolean };

export const useLogic = ({ isLoading, isError }: UseLogicParams) => {
  // Храним предыдущее состояния лоадера. Для показа анимации из isLoading должен быть false
  // Но так как это его изначальное состояние, отслеживаем было ли оно в состоянии true
  const prevLoading = useRef<boolean>();

  const [isShowLoader, setShowLoader] = useState(false);
  const [isShowGreetings, setShowGreetings] = useState(false);

  useEffect(() => {
    if (isLoading && !prevLoading.current) {
      prevLoading.current = true;
    }
  }, [isLoading]);

  useEffect(() => {
    // Показываем приветствие только один раз в рамках сессии
    const isExistSession = Boolean(sessionStorage.getItem(SESSION_KEY));

    if (!isExistSession && !isLoading && !isError && prevLoading.current) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setShowGreetings(true);

      const timer = setTimeout(() => {
        setShowGreetings(false);
      }, ALL_DURATION_MS);

      return () => clearTimeout(timer);
    }

    return;
  }, [isLoading, isError]);

  useEffect(() => {
    // Отложенный запуск отображения лоадера, на случай получения данных < LOADING_DISPLAY_DELAY_MS
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, LOADING_DISPLAY_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return { isShowLoader, isShowGreetings };
};
