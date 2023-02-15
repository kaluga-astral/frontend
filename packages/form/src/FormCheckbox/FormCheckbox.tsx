import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@astral/components';
import { useController } from 'react-hook-form';

import { useFormFieldErrorProps, useFormInputProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormCheckboxValue = boolean;

export type FormCheckboxProps<FieldValues extends object> = WithFormFieldProps<
  CheckboxProps,
  FieldValues
> & {
  success?: boolean;
};

/**
 * @description Адаптер для Checkbox
 */
export function FormCheckbox<FieldValues extends object>({
  success,
  ...props
}: FormCheckboxProps<FieldValues>) {
  const inputProps = useFormInputProps(props);
  const { field, fieldState } = useController(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  return (
    <FormControl>
      <FormControlLabel
        control={<Checkbox {...field} {...inputProps} />}
        label={props.title}
      />
      <FormHelperText error={errorProps.error} success={success}>
        {errorProps.helperText}
      </FormHelperText>
    </FormControl>
  );
}
