import { type ReactNode } from 'react';

import { styled } from '../../../styles';
import { DateCalendarButton } from '../DateCalendarButton';
import { type Theme } from '../../../theme';
import { type ButtonProps } from '../../../Button';

export type DateCalendarDayBtnWrapperProps = Omit<ButtonProps, 'variant'> & {
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
}: GetColorOptions) => {
  if (selected) {
    return theme.palette.common.white;
  }

  if (isOutOfAvailableRange) {
    return theme.palette.grey[600];
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
  isPreviousItemInSelectedRange,
  selected,
  theme,
}: DateCalendarDayBtnWrapperProps & WithTheme) => {
  // если элемент вне выбранной зоны, это значит что нам нужно скругление справа,
  // или если элемент выбранный, и перед ним есть сосед внутри выбранной зоны,
  // тогда устанавливаем скругление справа
  if (
    !(isInSelectedRange || isInHoveredRange) ||
    (isPreviousItemInSelectedRange && selected)
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
  'isCurrentInUserLocalTime',
  'isOutOfAvailableRange',
  'isInSelectedRange',
  'isInHoveredRange',
  'lengthInRow',
]);

export const DateCalendarGridButton = styled(DateCalendarButton, {
  shouldForwardProp: (propName: PropertyKey) =>
    !nonForwardableProps.has(propName),
})<DateCalendarDayBtnWrapperProps>`
  position: relative;

  color: ${(props) => getTextColor(props)};

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

  &:hover {
    border-radius: ${({ theme }) => theme.shape.small};
    box-shadow: ${({ theme, selected }) =>
      selected ? 'none' : `inset 0 0 0 2px ${theme.palette.grey[400]}`};
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
