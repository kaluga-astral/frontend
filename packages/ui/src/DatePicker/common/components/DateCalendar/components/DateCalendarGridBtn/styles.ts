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
  'selected',
  'isInSelectedRange',
]);

export const DateCalendarGridBtn = styled(DateCalendarBtn, {
  shouldForwardProp: (propName: PropertyKey) =>
    !nonForwardableProps.has(propName),
})<DateCalendarDayBtnWrapperProps>`
  position: relative;

  color: ${({ theme, isCurrent, isOutOfAvailableRange, selected }) =>
    (isOutOfAvailableRange && theme.palette.grey[600]) ||
    (!selected && isCurrent && theme.palette.primary.dark) ||
    (selected && theme.palette.common.white) ||
    ''};

  background-color: ${({ theme, selected, isInSelectedRange }) =>
    (selected && theme.palette.primary[800]) ||
    (isInSelectedRange && theme.palette.primary[100]) ||
    ''};

  border-radius: ${({ isInSelectedRange }) => (isInSelectedRange ? '0' : '')};

  &::after {
    position: absolute;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(2)};

    display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
    width: calc(100% - ${({ theme }) => theme.spacing(4)});
    height: ${({ theme }) => theme.spacing(0.5)};

    color: currentColor;

    background-color: currentColor;

    content: '';
  }
`;

export const DateCalendarGridBtnLarge = styled(DateCalendarGridBtn)`
  min-width: ${({ theme }) => theme.spacing(20)};
  min-height: ${({ theme }) => theme.spacing(13)};
  padding: ${({ theme }) => theme.spacing(4, 2)};

  text-transform: capitalize;

  &::after {
    bottom: ${({ theme }) => theme.spacing(2)};
    left: ${({ theme }) => theme.spacing(4)};

    width: calc(100% - ${({ theme }) => theme.spacing(8)});
  }
`;
