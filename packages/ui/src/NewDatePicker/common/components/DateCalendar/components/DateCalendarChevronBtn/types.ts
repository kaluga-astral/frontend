import { ButtonProps } from '../../../../../../Button';

export type DateCalendarChevronBtnProps = Omit<ButtonProps, 'title'> & {
  /**
   * @description текст который будет добавлен к окончанию текста подскуазки
   * @example "год" => "Следующий год"
   */
  postfixTitle: string;
  /**
   * @description флаг обозначающий нуобходимость использовать тексты во множественном числе
   */
  isPlural?: boolean;
};
