import { styled } from '../../../styles';
import { ROOT_ACTION_CELL_WIDTH, TREE_LINE_WIDTH } from '../../constants';
import { Button } from '../../../Button';

export const NestedRows = styled('ul', {
  shouldForwardProp: (prop) => !['$level', '$isShowConnector'].includes(prop),
})<{
  $level: number;
  $isShowConnector: boolean;
}>`
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

    display: ${({ $isShowConnector }) => ($isShowConnector ? 'block' : 'none')};

    width: 0;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const MoreButtonRow = styled('li', {
  shouldForwardProp: (prop) =>
    !['$level', '$isShowConnector', '$gridColumns'].includes(prop),
})<{
  $level: number;
  $isShowConnector: boolean;
  $gridColumns: string;
}>`
  position: relative;

  display: grid;
  grid-template-columns: ${({ $gridColumns }) => $gridColumns};

  height: 36px;
  margin-left: ${({ $level }) => `${$level * ROOT_ACTION_CELL_WIDTH}px`};

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: -${TREE_LINE_WIDTH}px;

    display: ${({ $isShowConnector }) => ($isShowConnector ? 'block' : 'none')};

    width: ${TREE_LINE_WIDTH}px;
    height: 50%;

    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-left: 1px solid ${({ theme }) => theme.palette.grey[400]};
    border-radius: 0 0 0 ${({ theme }) => theme.shape.small};
  }
`;

export const MoreButton = styled(Button, {
  shouldForwardProp: (prop) => !['$moreButtonColumnPosition'].includes(prop),
})<{ $moreButtonColumnPosition: number }>`
  grid-column: ${({ $moreButtonColumnPosition }) => $moreButtonColumnPosition};
  justify-self: start;

  margin: ${({ theme }) => theme.spacing(0, 2)};
`;
