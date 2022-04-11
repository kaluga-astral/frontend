import { List as MuiList } from '@mui/material';

import { styled } from '../styles';

export const StyledList = styled(MuiList)`
  a {
    display: inline-block;
    width: 100%;
    height: 100%;

    text-decoration: none;
  }

  .MuiCollapse-wrapperInner {
    width: 100%;
  }
`;
