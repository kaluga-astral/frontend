import { FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material';

export type FormHelperTextProps = MuiFormHelperTextProps & {
  success?: boolean;
  error?: boolean;
};

export default FormHelperTextProps;
