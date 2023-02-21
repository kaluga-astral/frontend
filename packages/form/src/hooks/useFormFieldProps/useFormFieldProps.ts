// @ts-nocheck

import { ControllerRenderProps, useController } from 'react-hook-form';

import { WithFormFieldProps, FieldValues } from '../../types';
// import { useFormFieldErrorProps } from '../useFormFieldErrorProps';
import { UseFormInputProps, useFormInputProps } from '../useFormInputProps';

type UseFormFieldReturn<
  TFieldValues extends FieldValues,
  TFormInputProps extends object,
> = ControllerRenderProps<TFieldValues> &
  UseFormInputProps<TFormInputProps, TFieldValues>;

/**
 * @description хук предназначен для предоставления пропсов field без пропсов rhf
 */
export const useFormFieldProps = <
  TFieldValues extends FieldValues,
  TFormInputProps extends object,
  TFormTextFieldProps extends WithFormFieldProps<
    TFormInputProps,
    TFieldValues
  > = WithFormFieldProps<TFormInputProps, TFieldValues>,
>(
  props: TFormTextFieldProps,
): UseFormFieldReturn<TFieldValues, TFormInputProps> => {
  const { field, fieldState } = useController(props);

  // const ref = useForwardedRef(field.ref);

  /**
   * Вырезаем системные RHF пропсы предназначенные только для useController, например rules, defaultValue и т.д.
   */
  const inputProps = useFormInputProps(props);

  /**
   * Получаем пропсы для отображения ошибки
   */
  // const errorProps = useFormFieldErrorProps(fieldState);

  return { ...field, ...inputProps };
};
