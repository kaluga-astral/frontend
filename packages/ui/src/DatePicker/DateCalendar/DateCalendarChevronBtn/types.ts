import { ButtonProps } from '../../../Button';

export type DateCalendarChevronBtnProps = Omit<ButtonProps, 'title'> & {
  /**
   * @description текст который будет добавлен к окончанию текста подсказки
   * @example "год" => "Следующий год"
   */
  postfixTitle: string;
  /**
   * @description флаг обозначающий необходимость использовать тексты во множественном числе
   */
  isPlural?: boolean;
};
