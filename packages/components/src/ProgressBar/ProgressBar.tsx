import { LinearProgress as MuiLinearProgress } from '@mui/material';

export type ProgressBarProps = {
  /**
   * Текущий прогресс загрузки (от 0 до 100)
   * @example <ProgressBar value={25} />
   */
  value: number;
};

export const ProgressBar = ({ value }: ProgressBarProps) => {
  const clampedValue = Math.max(0, Math.min(value, 100));

  return <MuiLinearProgress variant="determinate" value={clampedValue} />;
};
