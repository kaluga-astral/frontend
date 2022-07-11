import { Collapse } from '@mui/material';

import { styled } from '../styles';

import { CollapseProps } from './types';

export const StyledCollapse = styled(Collapse)<CollapseProps>`
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
