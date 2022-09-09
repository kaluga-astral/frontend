import { styled } from '../../../../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';

type DateCalendarDayBtnWrapperProps = {
  /**
   * @description флаг означающий что дата находится вне доступного диапазана, например при выборе дня, месяц до и месяц после, должны находиться вне
   */
  isOutOfAvailableRange?: boolean;
  isCurrent: boolean;
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
    content: '';
    display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
    position: absolute;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(2)};
    width: calc(100% - ${({ theme }) => theme.spacing(4)});
    height: ${({ theme }) => theme.spacing(0.5)};
    color: currentColor;
    background-color: currentColor;
  }
`;

export const DateCalendarGridBtnLarge = styled(DateCalendarGridBtn)`
  text-transform: capitalize;
  padding: ${({ theme }) => theme.spacing(4, 2)};
  min-height: ${({ theme }) => theme.spacing(13)};
  min-width: ${({ theme }) => theme.spacing(20)};

  &::after {
    bottom: ${({ theme }) => theme.spacing(2)};
    left: ${({ theme }) => theme.spacing(4)};
    width: calc(100% - ${({ theme }) => theme.spacing(8)});
  }
`;
