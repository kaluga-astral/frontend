import { styled } from '../../../styles';
import { DateCalendarBtn } from '../DateCalendarBtn';
import { Theme } from '../../../theme';

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

type GetColorOptions = {
  theme: Theme;
  selected?: boolean;
} & DateCalendarDayBtnWrapperProps;

const getTextColor = ({
  theme,
  isCurrent,
  isOutOfAvailableRange,
  selected,
}: GetColorOptions) => {
  if (selected) {
    return theme.palette.common.white;
  }

  if (isOutOfAvailableRange) {
    return theme.palette.grey[600];
  }

  if (!selected && isCurrent) {
    return theme.palette.primary.dark;
  }

  return '';
};

const getBgColor = ({
  theme,
  selected,
  isInSelectedRange,
}: GetColorOptions) => {
  if (selected) {
    return theme.palette.primary[800];
  }

  if (isInSelectedRange) {
    return theme.palette.primary[100];
  }

  return '';
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

  color: ${(props) => getTextColor(props)};

  background-color: ${(props) => getBgColor(props)};

  border-radius: ${({ isInSelectedRange }) => (isInSelectedRange ? '0' : '')};

  &::after {
    position: absolute;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(2)};

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
    bottom: ${({ theme }) => theme.spacing(2)};
    left: ${({ theme }) => theme.spacing(4)};

    width: calc(100% - 32px);
  }
`;
