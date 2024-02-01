import {
  Drawer,
  type DrawerProps,
  Typography,
  paperClasses,
} from '@mui/material';

import { styled } from '../styles';
import { type TypographyProps } from '../Typography';

import { OFFSET_TOP_SCREEN } from './constants';

export const StyledDrawer = styled(Drawer)<DrawerProps>`
  ${`.${paperClasses.root}`} {
    max-height: calc(100vh - ${OFFSET_TOP_SCREEN});

    border-top-left-radius: ${({ theme }) => theme.shape.large};
    border-top-right-radius: ${({ theme }) => theme.shape.large};
  }
`;

export const DrawerHeader = styled.header<{ drawerHeaderHeight: number }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;

  height: ${({ drawerHeaderHeight }) => `${drawerHeaderHeight}px`};
  padding: ${({ theme }) => theme.spacing(1, 2, 1, 4)};

  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const DrawerTitle = styled(Typography)<TypographyProps>`
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const DrawerBody = styled.div`
  overflow-y: auto;
`;
