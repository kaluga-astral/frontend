import { styled } from '../../styles';
import { listContainer } from '../../theme/mixins';

export const List = styled.ul`
  ${listContainer};

  overflow: hidden;
`;

export const InnerList = styled(List)`
  overflow: unset;
`;
