import { useEffect, useState } from 'react';

import { SecondsCountdown, type SecondsCountdownParams } from '../../services';

type UseSecondsCountdownParams = Pick<
  SecondsCountdownParams,
  'targetDate' | 'isInitialActive' | 'seconds'
>;

type UseSecondsCountdownResult = {
  /**
   *  Флаг активности таймера
   */
  isActive: boolean;
  /**
   *  Время в текстовом формате mm:ss
   */
  textTime: string;
  /**
   *  Метод перезапуска таймера к нужной дате или на нужное количество секунд
   */
  restart: (value: Date | number) => void;
};

/**
 *  Хук, предоставляющий функционал с текстом убывающих секунд
 */
export const useSecondsCountdown = ({
  targetDate,
  isInitialActive,
  seconds,
}: UseSecondsCountdownParams): UseSecondsCountdownResult => {
  const [textTime, setTextTime] = useState('');

  const [isCountDownActive, setCountDownActive] = useState(
    Boolean(isInitialActive),
  );

  const [countDown] = useState(
    () =>
      new SecondsCountdown({
        targetDate,
        isInitialActive: isInitialActive,
        seconds,
        onUpdateText: setTextTime,
        onUpdateActivity: setCountDownActive,
      }),
  );

  useEffect(() => () => countDown.destroy(), [countDown]);

  return {
    isActive: isCountDownActive,
    textTime: textTime || countDown.textTime,
    restart: countDown.restart,
  };
};
