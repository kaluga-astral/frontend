import { Drawer } from '@mui/material';

import { styled } from '../styles';

import { SideDialogProps } from './types';

export const StyledDrawer = styled(Drawer)<SideDialogProps>`
  .MuiPaper-root {
    width: 30%;
  }
  height: 100vh;
`;
