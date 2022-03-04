import { Drawer } from '@mui/material';

import { styled } from '../../styles';

export const StyledDrawer = styled(Drawer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};
  width: 241px;
  grid-column: 1;

  .MuiPaper-root {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: ${({ theme }) => theme.spacing(5, 0)};
    border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
    background-color: ${({ theme }) => theme.palette.background.element};
  }
`;
