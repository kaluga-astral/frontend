import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Tooltip,
} from '@astral/components';
import { useMemo } from 'react';

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

  const showTooltip = useMemo(
    () => Boolean(error && hideHelperText),
    [error, hideHelperText],
  );

  return (
    <FormControl>
      <Tooltip
        title={showTooltip && helperText}
        placement={'bottom-start'}
        withoutContainer={false}
      >
        <FormControlLabel
          control={
            <Checkbox checked={!!value} isError={error} {...restFieldProps} />
          }
          label={title}
        />
      </Tooltip>
      {!hideHelperText && (
        <FormHelperText error={error} success={success}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
