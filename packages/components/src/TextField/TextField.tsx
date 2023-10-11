import { type ReactNode, forwardRef, useMemo } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

import { FormHelperTextContent } from '../FormHelperText/FormHelperTextContent';
import { WithoutEmotionSpecific } from '../types';

export type TextFieldProps = Omit<
  WithoutEmotionSpecific<MuiTextFieldProps>,
  'variant' | 'color'
> & {
  success?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      success,
      error,
      helperText: helperTextProp,
      fullWidth = false,
      startAdornment,
      endAdornment,
      InputProps,
      ...props
    },
    ref,
  ) => {
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

      // helperText из mui/TextField имеет тип ReactNode | undefined;
      // однако если helperText={null} вспомогательный текст просто перестает
      // рендериться, поэтому необходимо передавать что-то отличное от null
      // но при этом не отображаеющеся на странице
      return <></>;
    }, [helperTextProp, success, error]);

    return (
      <MuiTextField
        ref={ref}
        variant="outlined"
        fullWidth={fullWidth}
        error={error}
        color={color}
        helperText={helperText}
        InputProps={{ startAdornment, endAdornment, ...InputProps }}
        {...props}
      />
    );
  },
);
