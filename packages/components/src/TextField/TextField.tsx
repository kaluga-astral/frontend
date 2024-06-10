import { type FocusEvent, type ReactNode, forwardRef, useMemo } from 'react';
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
  /**
   * Параметр для обрезания пробелов в текст филде при вызове onBlur.
   * @default true
   * @example <TextField trimmed={false} />
   */
  trimmed?: boolean;
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
      trimmed = true,
      onBlur,
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

    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (trimmed) {
        const newValue = event.target.value?.trim();

        props.onChange?.({
          ...event,
          target: { ...event.target, value: newValue },
        });
      }

      onBlur?.(event);
    };

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
        onBlur={handleOnBlur}
        {...props}
      />
    );
  },
);
