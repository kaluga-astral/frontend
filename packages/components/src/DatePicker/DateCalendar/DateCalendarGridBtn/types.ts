import { ReactNode } from 'react';

import { ButtonProps } from '../../../Button';

export type DateCalendarDayBtnWrapperProps = Omit<ButtonProps, 'variant'> & {
  /**
   * @description флаг означающий, что дата находится вне доступного диапазона,
   * Если принимает значение true, то это значит, что дата находится вне целевого диапазона, предназначенного для выбора. Текст кнопки будет иметь серый оттенок.
   * Если принимает значение false, то это значит, что дата находится внутри целевого диапазона, предназначенного для выбора. Текст кнопки будет иметь стандартный оттенок.
   */
  isOutOfAvailableRange?: boolean;
  /**
   * @description флаг означающий, что дата совпадает с локальным временем пользователя
   */
  isCurrentInUserLocalTime: boolean;
  /**
   * @description флаг означающий, что дата находится в выбранном диапазоне
   */
  isInSelectedRange?: boolean;
  /**
   * @description количество элементов в строке
   */
  lengthInRow: number;
  children: ReactNode;
  /**
   * @description флаг, означающий, что предыдущий элемент находится в выбранном диапазоне
   */
  isPreviousItemInSelectedRange?: boolean;
};
