import { type ReactNode, forwardRef, useMemo } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { type TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

import { FormHelperTextContent } from '../FormHelperText/FormHelperTextContent';
import { type WithoutEmotionSpecific } from '../types';

export type EmailFieldProps = Omit<
  WithoutEmotionSpecific<MuiTextFieldProps>,
  'variant' | 'color'
> & {
  /**
   * @description Флаг отображения успешного состояния
   */
  success?: boolean;
  /**
   * @description Элемент который добавляется в начало
   */
  startAdornment?: ReactNode;
  /**
   * @description Элемент который добавляется в конец
   */
  endAdornment?: ReactNode;
};

export const EmailField = forwardRef<HTMLDivElement, EmailFieldProps>(
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
        type="email"
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
