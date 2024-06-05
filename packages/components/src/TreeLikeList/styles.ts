import { ChevronROutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';
import { styled } from '../styles';

import { COLLAPSE_BUTTON_WIDTH, TREE_LINE_WIDTH } from './constants';

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
  overflow: hidden;
`;

export const InnerList = styled(List)`
  overflow: unset;
`;

export const Item = styled('li', {
  shouldForwardProp: (prop) => !['as', '$level'].includes(prop),
})<{ $level: number }>`
  position: relative;

  &:not(:last-of-type)::before {
    content: '';

    position: absolute;
    top: 0;

    width: 0;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
    transform: ${({ $level }) => `translateX(calc(-${TREE_LINE_WIDTH} + (${COLLAPSE_BUTTON_WIDTH} + ${$level}px) * ${$level}))`};
    z-index: 1;
`;

export const ItemContent = styled('div', {
  shouldForwardProp: (prop) => !['$isSelected', '$level'].includes(prop),
})<{ $isSelected: boolean; $level: number }>`
  position: relative;

  display: flex;
  align-items: center;
  min-height: 32px;
  padding: ${({ theme }) => theme.spacing(1, 4, 1, 0)};
  padding-left: ${({ theme, $level }) =>
    `calc(${theme.spacing($level * 7)} + ${theme.spacing(7)})`};

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.palette.primary[100] : 'transparent'};
  cursor: pointer;
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

    border-radius: 0 0 0 ${({ theme }) => theme.shape.small};
    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
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

  width: ${COLLAPSE_BUTTON_WIDTH};
  height: 24px;
  margin-left: -${COLLAPSE_BUTTON_WIDTH};
  z-index: 1;

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
