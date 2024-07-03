import { useEffect, useState } from 'react';

import { SecondsCountDown, type SecondsCountDownParams } from '../../utils';

type UseSecondsTimerParams = Pick<
  SecondsCountDownParams,
  'targetDate' | 'isInitialTimerActive' | 'seconds'
>;

/**
 *  хук, предоставляющий функционал с текстом убывающего времени
 */
export const useSecondsCountDown = ({
  targetDate,
  isInitialTimerActive,
  seconds,
}: UseSecondsTimerParams) => {
  const [textTime, setTextTime] = useState('');

  const [isTimerActive, setTimerActive] = useState(isInitialTimerActive);

  const timer = useState(
    () =>
      new SecondsCountDown({
        targetDate,
        isInitialTimerActive,
        seconds,
        onUpdateText: setTextTime,
        onUpdateActivity: setTimerActive,
      }),
  )[0];

  useEffect(() => () => timer.destroy(), [timer]);

  return {
    /**
     *  флаг активности таймера
     */
    isActive: isTimerActive,
    /**
     *  время в текстовом формате mm:ss
     */
    textTime: textTime || timer.textTime,
    /**
     *  метод перезапуска таймера к нужной дате или на нужное количество секунд
     */
    resetTimer: timer.restart,
  };
};
