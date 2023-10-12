import { styled } from '../../../styles';
import { DateCalendarButton } from '../DateCalendarBtn';
import { Theme } from '../../../theme';

import { DateCalendarDayBtnWrapperProps } from './types';

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
}: GetColorOptions) => {
  if (selected) {
    return theme.palette.primary[800];
  }

  if (isInSelectedRange) {
    return theme.palette.primary[100];
  }

  return '';
};

const getLeftBorderRadius = ({
  isInSelectedRange,
  isPreviousItemInSelectedRange,
  selected,
  theme,
}: DateCalendarDayBtnWrapperProps & WithTheme) => {
  // если элемент вне выбранной зоны, это значит что нам нужно скругление слева,
  // или если он выбранный, и перед ним нету элемента внутри,
  // то тогда устанавливаем скругление слева
  if (!isInSelectedRange || (!isPreviousItemInSelectedRange && selected)) {
    return theme.shape.small;
  }

  // если предыдушее условие не выполнилось,
  // значит элемент просто внутри выбранного диапазона,
  // тогда обнуляем стандартное скругление
  return '0';
};

const getRightBorderRadius = ({
  isInSelectedRange,
  isPreviousItemInSelectedRange,
  selected,
  theme,
}: DateCalendarDayBtnWrapperProps & WithTheme) => {
  // если элемент вне выбранной зоны, это значит что нам нужно скругление справа,
  // или если элемент выбранный, и перед ним есть сосед внутри выбранной зоны,
  // тогда устанавливаем скругление справа
  if (!isInSelectedRange || (isPreviousItemInSelectedRange && selected)) {
    return theme.shape.small;
  }

  // если предыдушее условие не выполнилось,
  // значит элемент просто внутри выбранного диапазона,
  // тогда обнуляем стандартное скругление
  return '0';
};

const nonForwardableProps = new Set<PropertyKey>([
  'isPreviousItemInSelectedRange',
  'isCurrentInUserLocalTime',
  'isOutOfAvailableRange',
  'isInSelectedRange',
  'lengthInRow',
]);

export const DateCalendarGridBtnWrapper = styled(DateCalendarButton, {
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

  /* первый элемент строки для выбранного диапазона должен иметь скругление слева */
  &:nth-of-type(${({ lengthInRow }) => lengthInRow}n + 1) {
    border-top-left-radius: ${({ theme, isInSelectedRange }) =>
      isInSelectedRange ? theme.shape.small : ''};
    border-bottom-left-radius: ${({ theme, isInSelectedRange }) =>
      isInSelectedRange ? theme.shape.small : ''};
  }

  /* последний элемент строки для выбранного диапазона должен иметь скругление справа */
  &:nth-of-type(${({ lengthInRow }) => lengthInRow}n) {
    border-top-right-radius: ${({ theme, isInSelectedRange }) =>
      isInSelectedRange ? theme.shape.small : ''};
    border-bottom-right-radius: ${({ theme, isInSelectedRange }) =>
      isInSelectedRange ? theme.shape.small : ''};
  }

  &::after {
    position: absolute;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(2)};

    display: ${({ isCurrentInUserLocalTime }) =>
      isCurrentInUserLocalTime ? 'block' : 'none'};
    width: calc(100% - ${({ theme }) => theme.spacing(4)});
    height: 2px;

    color: currentColor;

    background-color: currentColor;

    content: '';
  }
`;
