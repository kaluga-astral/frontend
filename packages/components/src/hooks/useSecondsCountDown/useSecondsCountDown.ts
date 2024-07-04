import { useEffect, useState } from 'react';

import { SecondsCountDown, type SecondsCountDownParams } from '../../utils';

type UseSecondsTimerParams = Pick<
  SecondsCountDownParams,
  'targetDate' | 'isInitialActive' | 'seconds'
>;

type UseSecondsCountDownResult = {
  /**
   *  флаг активности таймера
   */
  isActive: boolean;
  /**
   *  время в текстовом формате mm:ss
   */
  textTime: string;
  /**
   *  метод перезапуска таймера к нужной дате или на нужное количество секунд
   */
  resetTimer: (value: Date | number) => void;
};

/**
 *  хук, предоставляющий функционал с текстом убывающего времени
 */
export const useSecondsCountDown = ({
  targetDate,
  isInitialActive,
  seconds,
}: UseSecondsTimerParams): UseSecondsCountDownResult => {
  const [textTime, setTextTime] = useState('');

  const [isCountDownActive, setCountDownActive] = useState(
    Boolean(isInitialActive),
  );

  const countDown = useState(
    () =>
      new SecondsCountDown({
        targetDate,
        isInitialActive: isInitialActive,
        seconds,
        onUpdateText: setTextTime,
        onUpdateActivity: setCountDownActive,
      }),
  )[0];

  useEffect(() => () => countDown.destroy(), [countDown]);

  return {
    isActive: isCountDownActive,
    textTime: textTime || countDown.textTime,
    resetTimer: countDown.restart,
  };
};
