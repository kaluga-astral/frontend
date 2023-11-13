import { useEffect, useState } from 'react';

type UseTimerParams = {
  /**
   * @description Значение, при котором таймер останавливается
   */
  endTime?: number;
  /**
   * @description Интервал таймера в мс
   */
  stepMS?: number;
  /**
   * @description Callback, будет выполнена по истечению таймера
   */
  onExpires?: () => void;
  /**
   * @description Callback, вызывается при обновлении времени
   */
  onStep?: (time: number) => void;
};

type RestartTimer = (newTime?: number) => void;

export const useTimer = (
  startTime: number,
  params: UseTimerParams = {},
): [number, RestartTimer] => {
  const [time, setTime] = useState(startTime);

  let timeInterval: ReturnType<typeof setInterval> | null = null;
  const { endTime = 1, stepMS = 1000, onExpires, onStep } = params;
  const step = stepMS / 1000;

  const startTimer = () => {
    if (timeInterval) {
      clearInterval(timeInterval);
    }

    timeInterval = setInterval(
      () =>
        setTime((prevTimer) => {
          if (prevTimer > endTime) {
            const newTime = prevTimer - step;

            if (onStep) {
              onStep(newTime);
            }

            return newTime;
          }

          if (timeInterval) {
            clearInterval(timeInterval);
          }

          if (onExpires) {
            onExpires();
          }

          return 0;
        }),
      stepMS,
    );
  };

  const restartTimer: RestartTimer = (newTime) => {
    setTime(newTime || startTime);
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
  }, []);

  return [time, restartTimer];
};
