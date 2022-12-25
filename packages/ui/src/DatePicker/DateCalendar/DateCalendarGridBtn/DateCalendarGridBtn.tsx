import { ReactNode } from 'react';

import { ButtonProps } from '../../../Button';

import { DateCalendarGridBtnWrapper } from './styles';
import { IS_IN_RANGE_CLASS, IS_SELECTED_CLASS } from './constants';

export type DateCalendarDayBtnWrapperProps = Omit<ButtonProps, 'variant'> & {
  /**
   * @description флаг означающий, что дата находится вне доступного диапазона, например при выборе дня, месяц до и месяц после, должны находиться вне
   */
  isOutOfAvailableRange?: boolean;
  /**
   * @description флаг означающий, что дата совпадает с локальным временем пользователя
   */
  isCurrent: boolean;
  /**
   * @description флаг означающий, что дата находится в выбранном диапазоне
   */
  isInSelectedRange?: boolean;
  /**
   * @description количество элементов в строке, требуется для стилизации
   */
  lengthInRow: number;
  children: ReactNode;
};

export const DateCalendarGridBtn = ({
  className = '',
  selected,
  isInSelectedRange,
  ...props
}: DateCalendarDayBtnWrapperProps) => (
  <DateCalendarGridBtnWrapper
    className={`${className} ${isInSelectedRange ? IS_IN_RANGE_CLASS : ''} ${
      selected ? IS_SELECTED_CLASS : ''
    }`}
    selected={selected}
    isInSelectedRange={isInSelectedRange}
    {...props}
  />
);
