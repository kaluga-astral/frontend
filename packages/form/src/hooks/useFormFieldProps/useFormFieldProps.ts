import { useController } from 'react-hook-form';
import { useForwardedRef } from '@astral/components';

import type { FieldValues, WithFormFieldProps } from '../../types';
import { useFormFieldErrorProps } from '../useFormFieldErrorProps';
import { useFormInputProps } from '../useFormInputProps';

export type UseFormFieldProps<
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
> = WithFormFieldProps<TFormFieldProps, TFieldValues>;

/**
 * @description хук предназначен для получения пропсов при инициализации нового поля в RHF
 */
export const useFormFieldProps = <
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
>(
  props: UseFormFieldProps<TFormFieldProps, TFieldValues>,
) => {
  const { field, fieldState } = useController(props);

  const ref = useForwardedRef(field.ref);

  const inputProps = useFormInputProps<
    UseFormFieldProps<TFormFieldProps, TFieldValues>,
    TFieldValues
  >(props);

  const errorProps = useFormFieldErrorProps(fieldState);

  return { ...inputProps, ...field, ...errorProps, inputRef: ref };
};
