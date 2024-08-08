import { useController } from 'react-hook-form';
import { useForwardedRef } from '@astral/components';

import { type FieldValues, type WithFormFieldProps } from '../../types';
import { useFormFieldErrorProps } from '../useFormFieldErrorProps';
import { useFormInputProps } from '../useFormInputProps';

export type UseFormFieldProps<
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
> = WithFormFieldProps<TFormFieldProps, TFieldValues>;

/**
 * хук предназначен для получения пропсов при инициализации нового поля в RHF
 */
export const useFormFieldProps = <
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
>(
  props: UseFormFieldProps<TFormFieldProps, TFieldValues>,
) => {
  const { field, fieldState } = useController({
    ...props,
    disabled: undefined,
  });

  const ref = useForwardedRef(field.ref);

  const inputProps = useFormInputProps<
    UseFormFieldProps<TFormFieldProps, TFieldValues>,
    TFieldValues
  >(props);

  const errorProps = useFormFieldErrorProps(fieldState);

  return {
    ...field,
    ...inputProps,
    ...errorProps,
    inputRef: ref,
  };
};
