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

      // helperText из mui/TextField имеет тип React.ReactNode | undefined;
      // однако если helperText={null} вспомогательный текст просто перестает
      // рендериться, поэтому необходимо передавать что-то отличное от null
      // но при этом не отображаеющеся на странице
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
