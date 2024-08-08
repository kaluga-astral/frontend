import {
  Paper as MuiPaper,
  type PaperProps as MuiPaperProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type PaperProps = Omit<
  WithoutEmotionSpecific<MuiPaperProps>,
  'elevation'
> & {
  /**
   * Определяет, на какой высоте над поверхностью находится элемент. Чем больше значение, тем дальше элемент визуально.
   * @default elevation={1} 'Тень [200]'
   * @example
   * <Paper elevation={0}> = Нет тени
   * <Paper> | <Paper elevation={1}> = Тень [200]
   * <Paper elevation={2}> = Тень [300]
   */
  elevation?: 0 | 1 | 2;
};

export const Paper = (props: PaperProps) => {
  return <MuiPaper {...props} />;
};
