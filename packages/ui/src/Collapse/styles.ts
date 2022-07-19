import { Collapse } from '@mui/material';

import { styled } from '../styles';

export const StyledCollapse = styled(Collapse)`
  &.MuiCollapse-vertical {
    transition: ${({ theme }) =>
      `${theme.transitions.create('height', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest,
      })}`};
  }

  &.MuiCollapse-horizontal {
    transition: ${({ theme }) =>
      `${theme.transitions.create('width', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest,
      })}`};

    .MuiCollapse-wrapperInner {
      width: 100%;
    }
  }
`;
