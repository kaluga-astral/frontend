import { RadioGroup, RadioGroupProps } from '@astral/components';

import { WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

export type FormRadioGroupProps<FieldValues extends object> =
  WithFormFieldProps<RadioGroupProps, FieldValues>;

/**
 * @description Адаптер RadioGroup для формы
 */
export const FormRadioGroup = <FieldValues extends object>(
  props: FormRadioGroupProps<FieldValues>,
) => {
  const { errorText, isError, ...withoutErrorProps } = props;
  const { error, helperText, ref, inputRef, children, ...fieldProps } =
    useFormFieldProps<FormRadioGroupProps<FieldValues>, FieldValues>(
      withoutErrorProps,
    );

  return (
    <RadioGroup isError={error} errorText={helperText} {...fieldProps}>
      {children}
    </RadioGroup>
  );
};
