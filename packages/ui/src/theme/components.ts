import { Components } from '@mui/material';

import type { Theme } from './baseTheme';

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

const getMuiCssBaseline = (
  fontUrls: FontsUrls
): Components['MuiCssBaseline'] => ({
  styleOverrides: `
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
  `,
});

const getMuiTypography = (): Components['MuiTypography'] => ({
  variants: [
    {
      props: { variant: 'button' },
      style: {
        textTransform: 'capitalize',
      },
    },
  ],
  defaultProps: {
    variantMapping: {
      link: 'a',
      code: 'code',
    },
  },
});

const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableElevation: true,
    size: 'medium',
    variant: 'contained',
    color: 'primary',
  },
};

const MuiFormControl: Components['MuiFormControl'] = {
  styleOverrides: {},
};

const MuiTextField: Components['MuiTextField'] = {
  styleOverrides: {},
};

const MuiInputAdornment: Components['MuiInputAdornment'] = {
  styleOverrides: {},
};

const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        '&.MuiInputBase-colorSuccess + .MuiFormHelperText-root': {
          color: theme.palette.green[800],
        },
      };
    },
  },
};

const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root() {
      return {
        position: 'relative',
        transform: 'none',
      };
    },
  },
};

const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root({ theme }: { theme: any }) {
      return {
        margin: theme.spacing(1, 0, 0),
      };
    },
  },
};

const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root({ theme }: { theme: any }) {
      return {
        position: 'relative',
        transform: 'none',
        color: theme.palette.grey[700],
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(16),
        marginBottom: theme.spacing(1),
        '&.Mui-focused': {
          color: theme.palette.grey[700],
        },
        '&.Mui-error': {
          color: theme.palette.grey[700],
        },
        '&.Mui-disabled': {
          color: theme.palette.grey[600],
        },
      };
    },
  },
};

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {
    root({ theme }) {
      return {
        fontSize: theme.typography.pxToRem(14),
        borderRadius: theme.shape.small,
        color: theme.palette.grey[900],
        background: theme.palette.background.element,
        '&:hover': {
          // FIXME: to theme
          background: '#EEF1F4',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[300],
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary[700],
        },
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.background.element,
        },
      };
    },
    input({ theme }) {
      return {
        padding: theme.spacing(2.5, 2),
        borderRadius: theme.shape.small,
        '&:disabled': {
          background: theme.palette.background.element,
        },
        '&::placeholder': {
          opacity: 1,
          color: theme.palette.grey[600],
        },
      };
    },
    inputSizeSmall({ theme }) {
      return {
        paddingBlock: theme.spacing(2),
        paddingInline: theme.spacing(1.5),
      };
    },
    notchedOutline({ theme }: { theme: any }) {
      return {
        borderWidth: '2px',
        borderColor: theme.palette.grey[300],
      };
    },
  },
};

export const getComponents = (fontUrls: FontsUrls): Components<Theme> => ({
  MuiCssBaseline: getMuiCssBaseline(fontUrls),
  MuiTypography: getMuiTypography(),
  MuiButton,
  MuiFormControl,
  MuiTextField,
  MuiInputBase,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiFormLabel,
  MuiFormHelperText,
  MuiInputAdornment,
});
