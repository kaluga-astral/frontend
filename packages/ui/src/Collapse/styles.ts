import { Collapse } from '@mui/material';

import { styled } from '../styles';

export const StyledCollapse = styled(Collapse)`
  &.MuiCollapse-horizontal {
    .MuiCollapse-wrapperInner {
      width: 100%;
    }
  }
`;
