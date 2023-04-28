import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

type PaperProps = Omit<MuiPaperProps, 'elevation' | 'sx'> & {
  /**
   * @description Высота
   * @default elevation={1} 'Нет тени'
   * @example
   * <Paper> | <Paper elevation={1}> = Нет тени
   * <Paper elevation={2}> = Тень [200]
   * <Paper elevation={3}> = Тень [300]
   */
  elevation?: undefined | 1 | 2 | 3;
};

export const Paper = ({ ...props }: PaperProps) => {
  return <MuiPaper {...props} />;
};
