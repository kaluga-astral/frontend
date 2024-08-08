import { type ButtonProps } from '../../../Button';

export type DateCalendarChevronBtnProps = Omit<ButtonProps, 'title'> & {
  /**
   * текст который будет добавлен к окончанию текста подсказки
   * @example "год" => "Следующий год"
   */
  postfixTitle: string;
  /**
   * флаг обозначающий необходимость использовать тексты во множественном числе
   */
  isPlural?: boolean;
};
