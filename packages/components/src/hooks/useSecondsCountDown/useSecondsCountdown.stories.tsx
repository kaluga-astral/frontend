import { type Meta } from '@storybook/react';

import { Typography } from '../../Typography';
import { Button } from '../../Button';
import { Grid } from '../../Grid';

import { useSecondsCountdown } from './useSecondsCountdown';

/**
 * useSecondsCountdown предназначен для создания счетчика секунд
 *
 * ### [Figma]()
 * ### [Guide]()
 */
const meta: Meta<typeof useSecondsCountdown> = {
  title: 'hooks/useSecondsCountdown',
};

export default meta;

/**
 * Prop ```targetDate``` Целевая дата, до которой будет идти отсчет времени от текущего времени.
 * targetDate в приоритете при одновременном использовании с seconds
 */
export const TargetDate = () => {
  const dateIn90sec = new Date(Date.now() + 90 * 1000);
  const { textTime } = useSecondsCountdown({ targetDate: dateIn90sec });

  return <Typography>{textTime}</Typography>;
};

/**
 * Prop ```seconds``` Количество секунд на которые должен запуститься таймер
 * игнорируется, если передан targetDate
 */
export const Seconds = () => {
  const { textTime } = useSecondsCountdown({ seconds: 90 });

  return <Typography>{textTime}</Typography>;
};

/**
 * Prop ```isInitialActive``` флаг, отвечающий за необходимость немедленного запуска счетчика при создании
 */
export const IsInitialActive = () => {
  const { textTime } = useSecondsCountdown({
    seconds: 90,
    isInitialActive: false,
  });

  return <Typography>{textTime}</Typography>;
};

/**
 * Метод ```restart``` необходим, для повторного запуска счетчика
 */
export const Restart = () => {
  const { textTime, restart } = useSecondsCountdown({
    seconds: 10,
  });

  const handleClick = () => {
    restart(90);
  };

  return (
    <Grid spacing={2}>
      <Typography>{textTime}</Typography>
      <Button onClick={handleClick}>Перезапустить</Button>
    </Grid>
  );
};

/**
 * Свойство ```isActive``` флаг, показывающий активность таймера
 */
export const IsActive = () => {
  const { textTime, isActive } = useSecondsCountdown({
    seconds: 5,
  });

  return (
    <Grid spacing={2}>
      <Typography>{textTime}</Typography>
      <Typography>isActive: {String(isActive)}</Typography>
    </Grid>
  );
};
