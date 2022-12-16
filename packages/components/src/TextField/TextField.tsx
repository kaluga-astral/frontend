import { forwardRef, useMemo } from 'react';
import MuiTextField from '@mui/material/TextField';

import { FormHelperTextContent } from '../FormHelperText/FormHelperTextContent';

import { TextFieldProps } from './types';

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
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
        return (
          <FormHelperTextContent success>
            {helperTextProp}
          </FormHelperTextContent>
        );
      }

      if (error) {
        return (
          <FormHelperTextContent error>{helperTextProp}</FormHelperTextContent>
        );
      }

      if (helperTextProp) {
        return helperTextProp;
      }

      return <></>;
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
  },
);

export default TextField;
