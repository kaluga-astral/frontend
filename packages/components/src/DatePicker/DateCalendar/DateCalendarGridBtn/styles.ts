import { styled } from '../../../styles';
import { DateCalendarButton } from '../DateCalendarBtn';
import { Theme } from '../../../theme';

import { DateCalendarDayBtnWrapperProps } from './DateCalendarGridBtn';
import { IS_IN_RANGE_CLASS, IS_SELECTED_CLASS } from './constants';

type GetColorOptions = {
  theme: Theme;
} & DateCalendarDayBtnWrapperProps;

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

const nonForwardableProps = new Set<PropertyKey>([
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

  &.${IS_IN_RANGE_CLASS} {
    border-radius: 0;

    &:first-of-type,
    &:nth-of-type(${({ lengthInRow }) => lengthInRow}n + 1) {
      border-top-left-radius: ${({ theme }) => theme.shape.small};
      border-bottom-left-radius: ${({ theme }) => theme.shape.small};
    }

    &:nth-of-type(${({ lengthInRow }) => lengthInRow}n) {
      border-top-right-radius: ${({ theme }) => theme.shape.small};
      border-bottom-right-radius: ${({ theme }) => theme.shape.small};
    }
  }

  &:not(.${IS_IN_RANGE_CLASS}) + .${IS_SELECTED_CLASS}.${IS_IN_RANGE_CLASS} {
    border-top-left-radius: ${({ theme }) => theme.shape.small};
    border-bottom-left-radius: ${({ theme }) => theme.shape.small};
  }

  &.${IS_IN_RANGE_CLASS} + .${IS_SELECTED_CLASS} {
    border-top-right-radius: ${({ theme }) => theme.shape.small};
    border-bottom-right-radius: ${({ theme }) => theme.shape.small};
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
