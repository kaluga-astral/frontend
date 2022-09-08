import {
  Box,
  BoxProps,
  SwipeableDrawer,
  SwipeableDrawerProps,
  Typography,
  TypographyProps,
} from '@mui/material';

import { styled } from '../styles';

type SwipeableDrawerHeaderProps = BoxProps & {
  drawerBleedingHeight: number;
};

type SwipeableDrawerBodyProps = BoxProps & {
  drawerBleedingHeight: number;
};

const getHeight = ({
  drawerBleedingHeight,
}: SwipeableDrawerHeaderProps): string => `${drawerBleedingHeight}`;

const getMaxHeight = ({
  drawerBleedingHeight,
}: SwipeableDrawerHeaderProps): string =>
  `calc(100vh - ${drawerBleedingHeight}px * 2)`;

export const StyledSwipeableDrawer = styled(
  SwipeableDrawer,
)<SwipeableDrawerProps>`
  .MuiPaper-root {
    overflow: visible;
  }
`;

export const SwipeableDrawerHeader = styled(Box)<SwipeableDrawerHeaderProps>`
  position: absolute;
  top: -${(props) => getHeight({ ...props })}px;

  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => getHeight({ ...props })}px;
  padding: ${({ theme }) => theme.spacing(6, 6, 3, 6)};

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey[800]};
  border-radius: ${({ theme }) => theme.spacing(1, 1, 0, 0)};
  box-shadow: ${({ theme }) => theme.shadows[8]};
  visibility: visible;
`;

export const SwipeableDrawerPuller = styled(Box)<BoxProps>`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    fill: ${({ theme }) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[900]
        : theme.palette.grey[300]};
  }
`;

export const SwipeableDrawerPullerIcon = styled(Box)<BoxProps>`
  width: 14px;
  height: 2px;

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[900]
      : theme.palette.grey[300]};
  border-radius: 2px;
`;

export const SwipeableDrawerTitle = styled(Typography)<TypographyProps>`
  overflow: hidden;

  color: ${({ theme }) => theme.palette.grey[700]};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SwipeableDrawerBody = styled(Box)<SwipeableDrawerBodyProps>`
  z-index: ${({ theme }) => theme.zIndex.mobileStepper};

  height: 100%;
  max-height: ${(props) => getMaxHeight({ ...props })};
  overflow: auto;

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey[800]};
`;
