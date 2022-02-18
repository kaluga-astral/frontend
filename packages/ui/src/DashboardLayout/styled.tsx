import { Drawer } from '@mui/material';

import { Grid } from '../Grid';
import { styled } from '../styles';

import { HeaderProps } from './types';

/**
 * DASHBOARD
 */
export const StyledDashboard = styled(Grid)`
  height: 100vh;
  position: relative;
  > header {
    z-index: 1000;
  }
  > .sidebar {
    z-index: 999;
  }
`;

/**
 * HEADER
 */

export const StyledHeader = styled('header')<HeaderProps>`
  grid-column: 1 / -1;
  box-shadow: ${({ theme }) => theme.elevation[200]};
  padding: 0 ${({ theme }) => theme.spacing(5)};
  min-height: 56px;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const styles = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const InnerContainer = styled('div')`
  ${styles}
`;

export const LeftPartContainer = styled('div')`
  ${styles}
`;

export const LogoContainer = styled('div')<{ withWidget: boolean }>`
  :not(:empty) {
    margin-left: ${({ withWidget, theme }) => withWidget && theme.spacing(2)};
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
  max-height: 24px;
  height: 100%;
  > * {
    height: 100%;
  }
`;

export const LogoStyle = styled('img')`
  height: 100%;
  cursor: pointer;
`;

/**
 * SIDEBAR
 */
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
