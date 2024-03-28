import { useEffect, useState } from 'react';

import {
  ALL_DURATION_MS,
  LOADING_DISPLAY_DELAY_MS,
  SESSION_KEY,
} from '../../constants';

type UseLogicParams = {
  isSuccess?: boolean;
  isLoading?: boolean;
  isError?: boolean;
};

export const useLogic = ({
  isSuccess = false,
  isLoading,
  isError,
}: UseLogicParams) => {
  const [isShowLoader, setShowLoader] = useState(false);
  const [isShowGreetings, setShowGreetings] = useState(false);
  const [isShowContent, setShowContent] = useState(false);

  useEffect(() => {
    // Показываем приветствие только один раз в рамках сессии
    const isExistSession = Boolean(sessionStorage.getItem(SESSION_KEY));

    if (isSuccess && !isLoading && !isError) {
      if (isExistSession) {
        // Если приветствие уже показывали, то отображаем содержимое после окончания загрузки
        setShowContent(true);
      } else {
        sessionStorage.setItem(SESSION_KEY, 'true');
        setShowGreetings(true);

        const timer = setTimeout(() => {
          setShowGreetings(false);
          setShowContent(true);
        }, ALL_DURATION_MS);

        return () => clearTimeout(timer);
      }
    }

    return;
  }, [isSuccess, isLoading, isError]);

  useEffect(() => {
    // Отложенный запуск отображения лоадера, на случай получения данных < LOADING_DISPLAY_DELAY_MS
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, LOADING_DISPLAY_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return { isShowLoader, isShowGreetings, isShowContent };
};
