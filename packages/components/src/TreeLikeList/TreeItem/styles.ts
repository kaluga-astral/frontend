import { TreeItem } from '../../Tree';
import { styled } from '../../styles';

export const StyledItemContent = styled(TreeItem)`
  & > div {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style-type: none;
`;
