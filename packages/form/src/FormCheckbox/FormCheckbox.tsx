import { ReactNode } from 'react';
import { CheckboxField, CheckboxProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

export type FormCheckboxProps<FieldValues extends object> = Omit<
  WithFormFieldProps<CheckboxProps, FieldValues>,
  'title'
> & {
  success?: boolean;
  /**
   * Флаг принудительного скрытия блока helperText
   */
  hideHelperText?: boolean;
  title: ReactNode;
};

/**
 * @description Адаптер для CheckboxField
 */
export const FormCheckbox = <FieldValues extends object>({
  success,
  hideHelperText = false,
  ...restProps
}: FormCheckboxProps<FieldValues>) => {
  const { title, value, error, ...restFieldProps } = useFormFieldProps<
    FormCheckboxProps<FieldValues>,
    FieldValues
  >(restProps);

  return (
    <CheckboxField
      label={title}
      checked={Boolean(value)}
      hideHelperText={hideHelperText}
      isSuccess={success}
      isError={error}
      {...restFieldProps}
    />
  );
};
