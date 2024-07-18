import { TreeItem } from '../../TreeItem';
import { styled } from '../../../styles';

export const StyledItemContent = styled(TreeItem)`
  & > div {
    padding-bottom: 0;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
