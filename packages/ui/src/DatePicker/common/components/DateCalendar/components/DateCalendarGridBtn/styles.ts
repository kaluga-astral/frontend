import { styled } from '../../../../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';

type DateCalendarDayBtnWrapperProps = {
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
};

const nonForwardableProps = new Set<PropertyKey>([
  'isCurrent',
  'isOutOfAvailableRange',
  'isInSelectedRange',
]);

export const DateCalendarGridBtn = styled(DateCalendarBtn, {
  shouldForwardProp: (propName: PropertyKey) =>
    !nonForwardableProps.has(propName),
})<DateCalendarDayBtnWrapperProps>`
  position: relative;

  color: ${({ theme, isCurrent, isOutOfAvailableRange, selected }) =>
    (selected && theme.palette.common.white) ||
    (isOutOfAvailableRange && theme.palette.grey[600]) ||
    (!selected && isCurrent && theme.palette.primary.dark) ||
    ''};

  background-color: ${({ theme, selected, isInSelectedRange }) =>
    (selected && theme.palette.primary[800]) ||
    (isInSelectedRange && theme.palette.primary[100]) ||
    ''};

  border-radius: ${({ isInSelectedRange }) => (isInSelectedRange ? '0' : '')};

  &::after {
    position: absolute;
    bottom: 4px;
    left: 8px;

    display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
    width: calc(100% - 16px);
    height: 2px;

    color: currentColor;

    background-color: currentColor;

    content: '';
  }
`;

export const DateCalendarGridBtnLarge = styled(DateCalendarGridBtn)`
  min-width: 80px;
  min-height: 52px;
  padding: ${({ theme }) => theme.spacing(4, 2)};

  text-transform: capitalize;

  &::after {
    bottom: 8px;
    left: 16px;

    width: calc(100% - 32px);
  }
`;
