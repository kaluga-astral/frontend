import { Drawer } from '@mui/material';

import { styled } from '../../styles';

export const StyledDrawer = styled(Drawer)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.appBar - 1};

  grid-column: 1;
  width: 241px;

  .MuiPaper-root {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    padding: ${({ theme }) => theme.spacing(5, 0)};

    background-color: ${({ theme }) => theme.palette.background.element};
    border-right: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }
`;
