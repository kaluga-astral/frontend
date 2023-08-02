import {
  InputHTMLAttributes,
  ReactNode,
  Ref,
  forwardRef,
  useMemo,
} from 'react';
import {
  InputBaseProps,
  InputLabelProps,
  InputProps,
  TextField as MuiTextField,
  TextFieldClasses,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';
import { FormHelperTextContent } from '../FormHelperText/FormHelperTextContent';
import { FormHelperTextProps } from '../FormHelperText';

export type TextFieldProps = {
  /**
   * Задает оттенок success статуса
   */
  success?: boolean;
  /**
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean;
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TextFieldClasses>;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Props applied to the `FormHelperText` element.
   */
  FormHelperTextProps?: WithoutEmotionSpecific<Partial<FormHelperTextProps>>;
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * Props applied to theInputLabel element.
   */
  InputLabelProps?: WithoutEmotionSpecific<Partial<InputLabelProps>>;
  /**
   * Props applied to the Input element.
   */
  InputProps?: WithoutEmotionSpecific<Partial<InputProps>>;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputBaseProps['inputProps'];
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: Ref<HTMLInputElement>;
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   */
  multiline?: boolean;
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   */
  required?: boolean;
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: string | number;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: string | number;
  /**
   * Render a `Select` element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select?: boolean;
  /**
   * The size of the component.
   */
  size?: 'small' | 'medium';
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'value' | 'size'>;

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    { success, error, helperText: helperTextProp, fullWidth = false, ...props },
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
        {...props}
      />
    );
  },
);
