import { FieldValues } from 'react-hook-form';

import { WithFormFieldProps } from '../../types';

type UseFormInputProps<
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
> = WithFormFieldProps<TFormFieldProps, TFieldValues>;

type UseFormInputReturn<
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
> = Omit<
  UseFormInputProps<TFormFieldProps, TFieldValues>,
  'control' | 'defaultValue' | 'name' | 'rules' | 'shouldUnregister'
>;

/**
 * @description хук предназначен для получения props input'а без системных props RHF, таких как: control, rules.
 * Это необходимо для того, чтобы лишние props не попадали в DOM-дерево
 */
export const useFormInputProps = <
  TFormFieldProps extends object,
  TFieldValues extends FieldValues,
>(
  props: UseFormInputProps<TFormFieldProps, TFieldValues>,
): UseFormInputReturn<TFormFieldProps, TFieldValues> => {
  const {
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
    ...inputProps
  } = props;

  return inputProps;
};
