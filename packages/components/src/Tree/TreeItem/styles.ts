import { ChevronROutlineMd } from '@astral/icons';
import { typographyClasses } from '@mui/material';

import { styled } from '../../styles';
import { type Theme } from '../../theme';
import { listContainer } from '../../theme/mixins';
import { DESCRIPTION_ROOT_CLASSNAME } from '../../Description';
import { IconButton } from '../../IconButton';
import { Typography } from '../../Typography';
import { OverflowTypography } from '../../OverflowTypography';

import {
  COLLAPSE_BUTTON_WIDTH,
  GAP_WIDTH,
  HALF_PADDING_COLLAPSE_BUTTON_WIDTH,
  TREE_LINE_WIDTH,
} from './constants';

const getBackgroundColorOnHover = (
  theme: Theme,
  isSelected: boolean,
  isDisabled: boolean,
) => {
  if (isDisabled) {
    return 'transparent';
  }

  return isSelected
    ? theme.palette.primary[100]
    : theme.palette.background.elementHover;
};

export const Item = styled('li', {
  shouldForwardProp: (prop) => !['as', '$level'].includes(prop),
})<{ $level: number }>`
  position: relative;

  &:not(:last-of-type)::before {
    content: '';

    position: absolute;
    z-index: 1;
    top: 0;
    transform: ${({ $level }) =>
      `translateX(calc(((${COLLAPSE_BUTTON_WIDTH} + ${GAP_WIDTH}) * ${$level}) - ${HALF_PADDING_COLLAPSE_BUTTON_WIDTH}))`};

    width: 0;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const ItemContent = styled('div', {
  shouldForwardProp: (prop) =>
    !['$isSelected', '$isDisabled', '$level'].includes(prop),
})<{
  $isSelected: boolean;
  $isDisabled: boolean;
  $level: number;
}>`
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};

  position: relative;

  display: flex;
  flex-direction: column;

  min-height: 32px;
  padding: ${({ theme }) => theme.spacing(0, 4, 1, 0)};
  padding-left: ${({ theme, $level }) =>
    `calc(${theme.spacing($level * 7)} + ${theme.spacing(7)})`};

  color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.palette.text.disabled : theme.palette.text.primary};

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.palette.primary[100] : 'transparent'};

  transition: ${({ theme }) =>
    theme.transitions.create('background-color', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    })};

  &:hover {
    background-color: ${({ theme, $isSelected, $isDisabled }) =>
      getBackgroundColorOnHover(theme, $isSelected, $isDisabled)};
  }
`;

export const CollapseButton = styled(IconButton)<{
  $isNotBlockingExpandList?: boolean;
}>`
  position: relative;
  z-index: 1;

  width: ${COLLAPSE_BUTTON_WIDTH};
  height: 24px;
  margin-left: -${COLLAPSE_BUTTON_WIDTH};

  color: ${({ theme, $isNotBlockingExpandList }) =>
    $isNotBlockingExpandList ? theme.palette.text.primary : 'inherit'};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

export const ChevronIcon = styled(ChevronROutlineMd, {
  shouldForwardProp: (prop) => prop !== '$isActive',
})<{ $isActive?: boolean }>`
  transform: rotateZ(${({ $isActive }) => ($isActive ? 90 : 0)}deg);

  transition: ${({ theme }) =>
    theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.short,
    })};
`;

export const List = styled.ul`
  ${listContainer};
`;

export const LabelWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== '$level',
})<{ $level: number }>`
  position: relative;

  display: flex;
  flex-grow: 1;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing(1)};

  &::before {
    content: '';

    position: absolute;
    z-index: 1;
    top: 0;
    left: calc(
      ${HALF_PADDING_COLLAPSE_BUTTON_WIDTH} -
        (${COLLAPSE_BUTTON_WIDTH} + ${GAP_WIDTH}) * 2
    );

    width: ${TREE_LINE_WIDTH};

    /* Добавляем к высоте половину нижнего отступа, который не входит в высоту текущего элемента */
    height: ${({ theme }) => `calc(50% + ${theme.spacing(1)}/2)`};

    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-radius: 0 0 0 ${({ theme }) => theme.shape.small};
  }
`;

export const Label = styled(Typography)`
  display: flex;
  align-items: center;

  margin-left: ${({ theme }) => theme.spacing(1)};
`;

export const Note = styled(OverflowTypography)`
  margin-left: ${({ theme }) => theme.spacing(1)};

  .${DESCRIPTION_ROOT_CLASSNAME} {
    .${typographyClasses.root} {
      font-size: inherit;
      color: inherit;
    }
  }
`;
