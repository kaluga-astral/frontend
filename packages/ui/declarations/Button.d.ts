declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    contained: true;
    light: true;
    text: true;
    link: true;
  }

  interface ButtonPropsColorVariantOverrides {
    primary: true;
    success: true;
    warning: true;
    error: true;
  }
}
