import { ChevronROutlineMd } from '@astral/icons';

import { IconButton } from '../../IconButton';
import { styled } from '../../styles';

import { COLLAPSE_BUTTON_WIDTH, TREE_LINE_WIDTH } from './constants';

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
      `translateX(calc(-${TREE_LINE_WIDTH} + (${COLLAPSE_BUTTON_WIDTH} + ${$level}px) * ${$level}))`};

    width: 0;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const ItemContent = styled('div', {
  shouldForwardProp: (prop) =>
    !['$isSelected', '$isDisabled', '$level'].includes(prop),
})<{ $isSelected: boolean; $isDisabled: boolean; $level: number }>`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;

  min-height: 32px;
  padding: ${({ theme }) => theme.spacing(1, 4, 1, 0)};
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

  &::before {
    content: '';

    position: absolute;
    top: 0;
    right: ${({ $level }) =>
      `calc(100% - (${COLLAPSE_BUTTON_WIDTH} + ${$level}px) * ${$level})`};

    width: ${TREE_LINE_WIDTH};
    height: 50%;

    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-radius: 0 0 0 ${({ theme }) => theme.shape.small};
  }

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      $isSelected
        ? theme.palette.primary[100]
        : theme.palette.background.elementHover};
  }
`;

export const CollapseButton = styled(IconButton)`
  position: relative;
  z-index: 1;

  width: ${COLLAPSE_BUTTON_WIDTH};
  height: 24px;
  margin-left: -${COLLAPSE_BUTTON_WIDTH};

  color: inherit;

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
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
