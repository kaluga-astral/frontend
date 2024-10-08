import { type ReactNode } from 'react';

import { styled } from '../../styles';
import { StaticCalendarButton } from '../StaticCalendarButton';
import { type Theme } from '../../theme';
import { type ButtonProps } from '../../Button';

type DateCalendarDayBtnWrapperProps = Omit<ButtonProps, 'variant'> & {
  /**
   * флаг означающий, что дата находится вне доступного диапазона,
   * Если принимает значение true, то это значит, что дата находится вне целевого диапазона, предназначенного для выбора. Текст кнопки будет иметь серый оттенок.
   * Если принимает значение false, то это значит, что дата находится внутри целевого диапазона, предназначенного для выбора. Текст кнопки будет иметь стандартный оттенок.
   */
  isOutOfAvailableRange?: boolean;
  /**
   * флаг означающий, что дата совпадает с локальным временем пользователя
   */
  isCurrentInUserLocalTime: boolean;
  /**
   * флаг означающий, что дата находится в выбранном диапазоне
   */
  isInSelectedRange?: boolean;
  /**
   * флаг означающий, что дата находится в hover диапазоне
   */
  isInHoveredRange?: boolean;
  /**
   * количество элементов в строке
   */
  lengthInRow: number;
  children: ReactNode;
  /**
   * флаг, означающий, что предыдущий элемент находится в выбранном диапазоне
   */
  isPreviousItemInSelectedRange?: boolean;
  /**
   * флаг, означающий, что предыдущий элемент находится в выбранном диапазоне
   */
  isNextItemInSelectedRange?: boolean;
  /**
   * флаг, означающий, что следующий элемент находится в выбранном диапазоне
   */
  $isNotInteractable?: boolean;
  /**
   * флаг, означающий, что день является выходным
   */
  isHoliday?: boolean;
};

type WithTheme = {
  theme: Theme;
};

type GetColorOptions = WithTheme & DateCalendarDayBtnWrapperProps;

const getTextColor = ({
  theme,
  isCurrentInUserLocalTime,
  isOutOfAvailableRange,
  selected,
  isHoliday,
}: GetColorOptions) => {
  if (selected) {
    if (isHoliday) {
      return theme.palette.error[400];
    }

    return theme.palette.common.white;
  }

  if (isOutOfAvailableRange) {
    if (isHoliday) {
      return theme.palette.error[600];
    }

    return theme.palette.grey[600];
  }

  if (isHoliday) {
    return theme.palette.error[900];
  }

  if (!selected && isCurrentInUserLocalTime) {
    return theme.palette.primary.dark;
  }

  return '';
};

const getBgColor = ({
  theme,
  selected,
  isInSelectedRange,
  isInHoveredRange,
}: GetColorOptions) => {
  if (selected) {
    return theme.palette.primary[800];
  }

  if (isInSelectedRange) {
    return theme.palette.primary[100];
  }

  if (isInHoveredRange) {
    return theme.palette.grey[100];
  }

  return '';
};

const getLeftBorderRadius = ({
  isInSelectedRange,
  isInHoveredRange,
  isPreviousItemInSelectedRange,
  selected,
  theme,
}: DateCalendarDayBtnWrapperProps & WithTheme) => {
  // если элемент вне выбранной зоны, это значит что нам нужно скругление слева,
  // или если он выбранный, и перед ним нету элемента внутри,
  // то тогда устанавливаем скругление слева
  if (
    !(isInSelectedRange || isInHoveredRange) ||
    (!isPreviousItemInSelectedRange && selected)
  ) {
    return theme.shape.small;
  }

  // если предыдущее условие не выполнилось,
  // значит элемент просто внутри выбранного диапазона,
  // тогда обнуляем стандартное скругление
  return '0';
};

const getRightBorderRadius = ({
  isInSelectedRange,
  isInHoveredRange,
  isNextItemInSelectedRange,
  selected,
  theme,
}: DateCalendarDayBtnWrapperProps & WithTheme) => {
  // если элемент вне выбранной зоны, это значит что нам нужно скругление справа,
  // или если элемент выбранный, и перед ним есть сосед внутри выбранной зоны,
  // тогда устанавливаем скругление справа
  if (
    !(isInSelectedRange || isInHoveredRange) ||
    (!isNextItemInSelectedRange && selected)
  ) {
    return theme.shape.small;
  }

  // если предыдущее условие не выполнилось,
  // значит элемент просто внутри выбранного диапазона,
  // тогда обнуляем стандартное скругление
  return '0';
};

const nonForwardableProps = new Set<PropertyKey>([
  'isPreviousItemInSelectedRange',
  'isNextItemInSelectedRange',
  'isCurrentInUserLocalTime',
  'isOutOfAvailableRange',
  'isInSelectedRange',
  'isInHoveredRange',
  'lengthInRow',
  '$isNotInteractable',
  'isHoliday',
]);

export const StaticCalendarGridButton = styled(StaticCalendarButton, {
  shouldForwardProp: (propName: PropertyKey) =>
    !nonForwardableProps.has(propName),
})<DateCalendarDayBtnWrapperProps>`
  cursor: ${({ $isNotInteractable }) => ($isNotInteractable ? 'initial' : '')};

  position: relative;

  background-color: ${(props) => getBgColor(props)};
  border-radius: ${(props) => getLeftBorderRadius(props)}
    ${(props) => getRightBorderRadius(props)}
    ${(props) => getRightBorderRadius(props)}
    ${(props) => getLeftBorderRadius(props)};

  &::after {
    content: '';

    position: absolute;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(2)};

    display: ${({ isCurrentInUserLocalTime }) =>
      isCurrentInUserLocalTime ? 'block' : 'none'};

    width: calc(100% - ${({ theme }) => theme.spacing(4)});
    height: 2px;

    color: currentColor;

    background-color: currentColor;
  }

  &,
  &:hover {
    color: ${(props) => getTextColor(props)};
  }

  &:hover {
    border-radius: ${({ theme }) => theme.shape.small};
  }

  /* первый элемент строки для выбранного диапазона должен иметь скругление слева */
  &:nth-of-type(${({ lengthInRow }) => lengthInRow}n + 1) {
    border-top-left-radius: ${({
      theme,
      isInSelectedRange,
      isInHoveredRange,
    }) => (isInSelectedRange || isInHoveredRange ? theme.shape.small : '')};
    border-bottom-left-radius: ${({
      theme,
      isInSelectedRange,
      isInHoveredRange,
    }) => (isInSelectedRange || isInHoveredRange ? theme.shape.small : '')};
  }

  /* последний элемент строки для выбранного диапазона должен иметь скругление справа */
  &:nth-of-type(${({ lengthInRow }) => lengthInRow}n) {
    border-top-right-radius: ${({
      theme,
      isInSelectedRange,
      isInHoveredRange,
    }) => (isInSelectedRange || isInHoveredRange ? theme.shape.small : '')};
    border-bottom-right-radius: ${({
      theme,
      isInSelectedRange,
      isInHoveredRange,
    }) => (isInSelectedRange || isInHoveredRange ? theme.shape.small : '')};
  }
`;
