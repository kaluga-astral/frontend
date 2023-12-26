import { CodeField, CodeFieldProps } from '@astral/components';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormCodeFieldProps<FieldValues extends object> = WithFormFieldProps<
  CodeFieldProps,
  FieldValues
>;

/**
 * @description Адаптер для CodeField
 */
export const FormCodeField = <FieldValues extends object>(
  props: FormCodeFieldProps<FieldValues>,
) => {
  const { errorText, isError, ...withoutErrorProps } = props;
  const { error, helperText, onChange, value, ...fieldProps } =
    useFormFieldProps<FormCodeFieldProps<FieldValues>, FieldValues>(
      withoutErrorProps,
    );

  return (
    <CodeField
      isError={error}
      errorText={helperText}
      onChange={onChange}
      initialValue={value}
      {...fieldProps}
    />
  );
};
