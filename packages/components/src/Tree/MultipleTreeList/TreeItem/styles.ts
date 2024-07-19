import { TreeItem } from '../../TreeItem';
import { styled } from '../../../styles';
import {
  COLLAPSE_BUTTON_WIDTH,
  GAP_WIDTH,
  HALF_PADDING_COLLAPSE_BUTTON_WIDTH,
} from '../../TreeItem/constants';

export const StyledItemContent = styled(TreeItem, {
  shouldForwardProp: (prop) => !['$level'].includes(prop),
})<{
  $level: number;
}>`
  & > div {
    padding-bottom: 0;
  }

  & > div > div::before {
    transform: ${({ $level }) =>
      `translateX(calc(((${COLLAPSE_BUTTON_WIDTH} + ${GAP_WIDTH} - 1px) * ${$level}) - ${HALF_PADDING_COLLAPSE_BUTTON_WIDTH}))`};
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
