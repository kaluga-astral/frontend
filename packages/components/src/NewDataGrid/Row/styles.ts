import { ChevronROutlineMd } from '@astral/icons';

import { IconButton } from '../../IconButton';
import { styled } from '../../styles';
import { ROOT_ACTION_CELL_WIDTH, TREE_LINE_WIDTH } from '../constants';
import { Cell } from '../Cell';

import { HIDDEN_CHILDREN_ROW_CLASSNAME } from './constants';

export const Wrapper = styled.li<{
  $gridColumns: string;
  $level: number;
}>`
  position: relative;

  &:not(:last-of-type)::before,
  &.${HIDDEN_CHILDREN_ROW_CLASSNAME}::before {
    content: '';

    position: absolute;
    z-index: 1;
    top: 0;
    transform: ${({ $level }) =>
      `translateX(calc(${ROOT_ACTION_CELL_WIDTH}px * ${$level} - ${TREE_LINE_WIDTH}px))`};

    width: 0;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const ContentWrapper = styled.div<{
  $isHovered?: boolean;
  $isSelected?: boolean;
  $gridColumns: string;
}>`
  display: grid;
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};

  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.palette.primary[100] : 'transparent'};

  transition: ${({ theme }) => {
    return theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
    });
  }};

  &:hover {
    cursor: ${({ $isHovered }) => ($isHovered ? 'pointer' : 'default')};

    background-color: ${({ theme, $isHovered }) =>
      $isHovered ? theme.palette.background.elementHover : 'transparent'};
  }
`;

export const CellStyled = styled(Cell)<{ $level: number }>`
  position: relative;

  margin-left: ${({ $level }) => `${$level * ROOT_ACTION_CELL_WIDTH}px`};

  &:first-of-type::before {
    content: '';

    position: absolute;
    top: 0;
    left: -${TREE_LINE_WIDTH}px;

    width: ${TREE_LINE_WIDTH}px;
    height: 50%;

    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-radius: 0 0 0 ${({ theme }) => theme.shape.small};
  }
`;

export const CheckboxCell = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${ROOT_ACTION_CELL_WIDTH}px;
`;

export const CollapseCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${ROOT_ACTION_CELL_WIDTH}px;
`;

export const CollapseButton = styled(IconButton)`
  width: 24px;
  height: 24px;

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
