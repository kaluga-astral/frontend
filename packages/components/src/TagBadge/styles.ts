import { styled } from '../styles/index';
import { Badge } from '../Badge';

export const StyledBadge = styled(Badge)`
  vertical-align: text-top;

  & span.MuiBadge-badge {
    position: static;

    box-sizing: content-box;
    height: 16px;

    transform: none;
  }
`;
