import { Drawer } from '@mui/material';

import { styled } from '../../styles';

export const StyledDrawer = styled(Drawer)`
  grid-column: 1;
  width: 241px;
  position: relative;
  z-index: 999;
  .MuiPaper-root {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: ${({ theme }) => theme.palette.background.element};
    padding: ${({ theme }) => theme.spacing(5, 0)};
    border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }
`;
