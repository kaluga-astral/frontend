import { useEffect, useState } from 'react';

import { useInterval } from '../../../hooks';

type UseTimerResult = number;

export type UseTimerHook = (
  seconds: number | undefined,
  endTimerHook?: () => void,
) => UseTimerResult;

// TODO: Рассмотреть вынос хука в hooks
export const useTimer: UseTimerHook = (seconds, endTimerHook) => {
  const [timeLeft, setTimeLeft] = useState(seconds || 0);

  useInterval(
    () => setTimeLeft((currentTimeLeft) => currentTimeLeft - 1),
    1000,
  );

  useEffect(() => {
    if (timeLeft < 1) {
      if (typeof endTimerHook === 'function') {
        endTimerHook();
      }
    }
  }, [timeLeft, endTimerHook]);

  return timeLeft;
};
