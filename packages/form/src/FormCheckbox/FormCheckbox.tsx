import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

export type FormCheckboxProps<FieldValues extends object> = WithFormFieldProps<
  CheckboxProps,
  FieldValues
> & {
  success?: boolean;
  /**
   * Флаг принудительного скрытия блока helperText
   */
  hideHelperText?: boolean;
};

/**
 * @description Адаптер для Checkbox
 */
export const FormCheckbox = <FieldValues extends object>({
  success,
  hideHelperText = false,
  ...restProps
}: FormCheckboxProps<FieldValues>) => {
  const { title, error, helperText, value, ...restFieldProps } =
    useFormFieldProps<FormCheckboxProps<FieldValues>, FieldValues>(restProps);

  return (
    <FormControl>
      <FormControlLabel
        control={<Checkbox checked={!!value} {...restFieldProps} />}
        label={title}
      />
      {!hideHelperText && (
        <FormHelperText error={error} success={success}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
