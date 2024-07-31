import { styled } from '../../../styles';
import { ROOT_ACTION_CELL_WIDTH, TREE_LINE_WIDTH } from '../../constants';

export const NestedRows = styled.ul<{ $level: number }>`
  position: relative;

  margin: 0;
  padding: 0;

  list-style: none;

  &::before {
    content: '';

    position: absolute;
    z-index: 2;
    top: 0;
    transform: ${({ $level }) =>
      `translateX(calc(${ROOT_ACTION_CELL_WIDTH}px * ${$level} - ${TREE_LINE_WIDTH}px))`};

    width: 0;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const MoreButtonRow = styled.li<{ $level: number }>`
  position: relative;

  height: 36px;
  margin-left: ${({ $level }) => `${$level * ROOT_ACTION_CELL_WIDTH}px`};
  padding: ${({ theme }) => theme.spacing(0, 2)};

  &::before {
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
