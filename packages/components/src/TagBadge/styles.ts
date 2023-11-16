import { styled } from '../styles/index';
import { Badge } from '../Badge';

export const StyledBadge = styled(Badge)`
  vertical-align: text-top;

  & span.MuiBadge-badge {
    position: static;
    transform: none;

    box-sizing: content-box;
    height: 16px;
  }
`;
