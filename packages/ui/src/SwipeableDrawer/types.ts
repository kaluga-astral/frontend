import { ReactNode } from 'react';
import { SwipeableDrawerProps as MuiSwipeableDrawerProps } from '@mui/material';

export interface SwipeableDrawerExtend {
  drawerBleedingTitle: string;
  drawerBleedingIcon?: ReactNode;
  drawerBleeding?: number;
}

export type SwipeableDrawerProps = MuiSwipeableDrawerProps &
  SwipeableDrawerExtend;
