declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    variant?: 'contained' | 'light' | 'text' | 'link';
  }

  interface ButtonPropsColorVariantOverrides {
    color?: 'primary' | 'success' | 'warning' | 'error';
  }
}
