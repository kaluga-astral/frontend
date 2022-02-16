import { forwardRef, useMemo } from 'react';
import MuiTextField from '@mui/material/TextField';

import { FormHelperText } from '../FormHelperText';

import { TextFieldProps } from './types';

export const TextField = forwardRef<HTMLDivElement>(
  (props: TextFieldProps, ref) => {
    const {
      variant,
      success,
      error,
      color: colorProp,
      helperText: helperTextProp,
      ...restProps
    } = props;

    const color = useMemo(() => {
      if (success) {
        return 'success';
      }

      return undefined;
    }, [success]);

    const helperText = useMemo(() => {
      if (success) {
        return <FormHelperText success>{helperTextProp}</FormHelperText>;
      }
      if (error) {
        return <FormHelperText error>{helperTextProp}</FormHelperText>;
      }

      return helperTextProp;
    }, [helperTextProp, success, error]);

    return (
      <MuiTextField
        ref={ref}
        variant="outlined"
        error={error}
        color={color}
        helperText={helperText}
        {...restProps}
      />
    );
  }
);

export default TextField;
