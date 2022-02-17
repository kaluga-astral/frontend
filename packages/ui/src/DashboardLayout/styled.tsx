import { Drawer, DrawerProps } from '@mui/material';

import { Grid } from '../Grid';
import { styled } from '../styles';

import { HeaderProps } from './types';

/**
 * DASHBOARD
 */
export const DashboardStyle = styled(Grid)`
  height: 100vh;
  position: relative;
  > header {
    z-index: 1000;
    grid-area: header;
  }
  > main {
    grid-area: main;
  }
  > .sidebar {
    grid-area: sidebar;
    z-index: 999;
  }
`;

/**
 * HEADER
 */

export const StyledHeader = styled('header', {
  shouldForwardProp: (prop) => prop !== 'height',
})<HeaderProps>`
  box-shadow: ${({ theme }) => theme.elevation[200]};
  padding: 0 ${({ theme }) => theme.spacing(5)};
  min-height: 56px;
  height: var(--headerHeight, ${(props) => props.height}px);
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

type DrawerStyleProps = DrawerProps & {
  width?: number;
};

/**
 * SIDEBAR
 */
export const DrawerStyle = styled(Drawer)<DrawerStyleProps>`
  width: calc(var(--sidebarWidth, ${(props) => props.width}px) + 1px);
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
