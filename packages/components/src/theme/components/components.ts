import type {} from '@mui/lab/themeAugmentation';
import { type Components } from '@mui/material';

import { type Theme } from '../types';

import { MuiAlert } from './MuiAlert';
import { MuiButton } from './MuiButton';
import { MuiButtonBase } from './MuiButtonBase';
import { MuiLoadingButton } from './MuiLoadingButton';
import { MuiFormHelperText } from './MuiFormHelperText';
import { MuiFormLabel } from './MuiFormLabel';
import { MuiInputLabel } from './MuiInputLabel';
import { MuiOutlinedInput } from './MuiOutlinedInput';
import { MuiPaginationItem } from './MuiPaginationItem';
import { MuiPaper } from './MuiPaper';
import { MuiTypography } from './MuiTypography';
import { MuiAutocomplete } from './MuiAutocomplete';
import { MuiDialog } from './MuiDialog';
import { MuiDrawer } from './MuiDrawer';
import { MuiDialogTitle } from './MuiDialogTitle';
import { MuiDialogContent } from './MuiDialogContent';
import { MuiDialogActions } from './MuiDialogActions';
import { MuiTableCell } from './MuiTableCell';
import { MuiTableHead } from './MuiTableHead';
import { MuiTableRow } from './MuiTableRow';
import { MuiMenu } from './MuiMenu';
import { MuiMenuItem } from './MuiMenuItem';
import { MuiCircularProgress } from './MuiCircularProgress';
import { MuiListItemButton } from './MuiListItemButton';
import { MuiListItemText } from './MuiListItemText';
import { MuiLinearProgress } from './MuiLinearProgress';
import { MuiTab } from './MuiTab';
import { MuiTabs } from './MuiTabs';
import { MuiStepLabel } from './MuiStepLabel';
import { MuiStep } from './MuiStep';
import { MuiStepConnector } from './MuiStepConnector';
import { MuiToggleButton } from './MuiToggleButton';
import { MuiToggleButtonGroup } from './MuiToggleButtonGroup';
import { MuiSwitch } from './MuiSwitch';
import { MuiTextField } from './MuiTextField';

export type FontsUrls = {
  bold: {
    woff: string;
    woff2: string;
  };
  light: {
    woff: string;
    woff2: string;
  };
  medium: {
    woff: string;
    woff2: string;
  };
  regular: {
    woff: string;
    woff2: string;
  };
};

const getFontFaces = (fontUrls: FontsUrls): string => `
  @font-face {
    font-family: 'Ubuntu';
    font-style: 'normal';
    font-weight: 300;
    font-display: swap;
    src: url(${fontUrls.light.woff2}) format('woff2'), url(${fontUrls.light.woff}) format('woff');
  }
  @font-face { 
    font-family: 'Ubuntu';
    font-style: 'normal';
    font-weight: 400;
    font-display: swap;
    src: url(${fontUrls.regular.woff2}) format('woff2'), url(${fontUrls.regular.woff}) format('woff');
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: 'normal';
    font-weight: 500;
    font-display: swap;
    src: url(${fontUrls.medium.woff2}) format('woff2'), url(${fontUrls.medium.woff}) format('woff');
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: 'normal';
    font-weight: 700;
    font-display: swap;
    src: url(${fontUrls.bold.woff2}) format('woff2'), url(${fontUrls.bold.woff}) format('woff');
  }
`;

const getMuiCssBaseline = (
  fontUrls: FontsUrls,
): Components['MuiCssBaseline'] => ({
  styleOverrides: getFontFaces(fontUrls),
});

const getMuiScopedCssBaseline = (
  fontUrls: FontsUrls,
): Components['MuiScopedCssBaseline'] => ({
  styleOverrides: {
    root: getFontFaces(fontUrls),
  },
});

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
  },
};

const MuiRadio: Components['MuiRadio'] = {
  defaultProps: {
    disableRipple: true,
  },
};

export const getComponents = (fontUrls: FontsUrls): Components<Theme> => ({
  MuiCssBaseline: getMuiCssBaseline(fontUrls),
  MuiScopedCssBaseline: getMuiScopedCssBaseline(fontUrls),
  MuiAlert,
  MuiButton,
  MuiButtonBase,
  MuiLoadingButton,
  MuiTypography,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiFormLabel,
  MuiFormHelperText,
  MuiAutocomplete,
  MuiCheckbox,
  MuiMenu,
  MuiMenuItem,
  MuiRadio,
  MuiDialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
  MuiDrawer,
  MuiTableCell,
  MuiTableHead,
  MuiTableRow,
  MuiPaginationItem,
  MuiPaper,
  MuiCircularProgress,
  MuiListItemButton,
  MuiListItemText,
  MuiLinearProgress,
  MuiTab,
  MuiTabs,
  MuiStepLabel,
  MuiStep,
  MuiStepConnector,
  MuiToggleButtonGroup,
  MuiToggleButton,
  MuiTextField,
  MuiSwitch,
});
