import { ButtonProps } from '../Button';

export type FlowButtonProps = ButtonProps & {
  /**
   * @targetText Текст на кнопке, указаывающий направление по флоу
   * */
  targetText: string;
};
