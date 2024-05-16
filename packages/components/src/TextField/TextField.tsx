import { type ReactNode, forwardRef, useMemo } from 'react';
import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

import { FormHelperTextContent } from '../FormHelperText';
import { type WithoutEmotionSpecific } from '../types';

export type TextFieldProps = Omit<
  WithoutEmotionSpecific<MuiTextFieldProps>,
  'variant' | 'color'
> & {
  /**
   * Флаг отображения успешного состояния
   */
  success?: boolean;
  /**
   * Элемент, который добавляется в начало
   */
  startAdornment?: ReactNode;
  /**
   * Элемент, который добавляется в конец
   */
  endAdornment?: ReactNode;
  /**
   * Максимальная длина ввода
   */
  maxLength?: number;
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
      inputProps,
      InputProps,
      maxLength,
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
      // но при этом не отображающиеся на странице
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
        InputProps={{
          startAdornment,
          endAdornment,
          ...InputProps,
        }}
        inputProps={{
          maxLength,
          ...inputProps,
        }}
        {...props}
      />
    );
  },
);
