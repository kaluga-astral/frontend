import { List as MuiList } from '@mui/material';

import { styled } from '../styles';

import { ListProps } from './types';

export const StyledList = styled(MuiList)<ListProps>`
  a {
    display: inline-block;
    width: 100%;
    height: 100%;

    text-decoration: none;
  }

  .MuiCollapse-root {
    transition: ${({ theme }) =>
      `${theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })} !important`};
  }

  .MuiCollapse-wrapperInner {
    width: 100%;
  }
`;
