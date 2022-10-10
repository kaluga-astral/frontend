import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material';
import { FC } from 'react';

import { FormHelperTextContent } from './FormHelperTextContent';

export type FormHelperTextProps = MuiFormHelperTextProps & {
  success?: boolean;
  error?: boolean;
};

export const FormHelperText: FC<FormHelperTextProps> = ({
  children,
  success,
  error,
  ...props
}: FormHelperTextProps) => {
  return (
    <MuiFormHelperText {...props}>
      <FormHelperTextContent error={error} success={success}>
        {children}
      </FormHelperTextContent>
    </MuiFormHelperText>
  );
};
