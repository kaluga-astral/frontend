import LinearProgress from '@mui/material/LinearProgress';

import { ProgressBarContainer, Title } from './styles';

export type ProgressBarProps = {
  /**
   * @example <ProgressBar currentProgress={25} maxProgress={100} />
   * Текущая загрузка
   */
  currentProgress?: number;
  /**
   * @example <ProgressBar currentProgress={25} maxProgress={100} />
   * Максимальный результат
   */
  maxProgress?: number;
};

export const ProgressBar = ({
  currentProgress,
  maxProgress,
}: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <Title>Progress bar</Title>
      <LinearProgress
        variant="determinate"
        value={
          currentProgress !== undefined && maxProgress !== undefined
            ? Math.min(currentProgress, maxProgress)
            : undefined
        }
        sx={{
          width: '100%',
          borderRadius: '4px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#6746eb',
          },
        }}
      />
    </ProgressBarContainer>
  );
};
