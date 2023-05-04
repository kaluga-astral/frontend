import { styled } from '../../../styles';
import { DateCalendarButton } from '../DateCalendarBtn';
import { Theme } from '../../../theme';

import { DateCalendarDayBtnWrapperProps } from './DateCalendarGridBtn';

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
  if (
    !isInSelectedRange ||
    (!isPreviousItemInSelectedRange && isInSelectedRange && selected)
  ) {
    return theme.shape.small;
  }

  if (isInSelectedRange) {
    return '0';
  }

  return '';
};

const getRightBorderRadius = ({
  isInSelectedRange,
  isPreviousItemInSelectedRange,
  selected,
  theme,
}: DateCalendarDayBtnWrapperProps & WithTheme) => {
  if (!isInSelectedRange || (isPreviousItemInSelectedRange && selected)) {
    return theme.shape.small;
  }

  if (isInSelectedRange) {
    return '0';
  }

  return '';
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

  --radius-left: ${(props) => getLeftBorderRadius(props)};
  --radius-right: ${(props) => getRightBorderRadius(props)};
  border-radius: var(--radius-left) var(--radius-right) var(--radius-right)
    var(--radius-left);

  &:nth-of-type(${({ lengthInRow }) => lengthInRow}n + 1) {
    --radius-left: ${({ theme, isInSelectedRange }) =>
      isInSelectedRange ? theme.shape.small : ''};
  }

  &:nth-of-type(${({ lengthInRow }) => lengthInRow}n) {
    --radius-right: ${({ theme, isInSelectedRange }) =>
      isInSelectedRange ? theme.shape.small : ''};
  }

  &::after {
    position: absolute;
    bottom: ${({ theme }) => theme.spacing(1)};
    left: ${({ theme }) => theme.spacing(2)};

    display: ${({ isCurrentInUserLocalTime }) =>
      isCurrentInUserLocalTime ? 'block' : 'none'};
    width: calc(100% - 16px);
    height: 2px;

    color: currentColor;

    background-color: currentColor;

    content: '';
  }
`;
