import { ListProps, List as MuiList } from '@mui/material';

import { styled } from '../styles';

export const List = styled(MuiList)`
  a {
    width: 100%;
    height: 100%;
    display: inline-block;
    text-decoration: none;
  }
`;
export type { ListProps };
