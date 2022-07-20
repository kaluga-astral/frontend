import { List as MuiList } from '@mui/material';

import { styled } from '../styles';

import { ListProps } from './types';

export const StyledList = styled(MuiList)<ListProps>`
  a {
    display: inline-block;
    width: 100%;

    text-decoration: none;
  }
`;
