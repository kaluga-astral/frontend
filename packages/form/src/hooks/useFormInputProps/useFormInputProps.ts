import { FieldValues } from 'react-hook-form';

import { WithFormFieldProps } from '../../types';

export type UseFormInputProps<
  TFormInputProps extends object,
  TFieldValues extends FieldValues,
> = Omit<
  WithFormFieldProps<TFormInputProps, TFieldValues>,
  'name' | 'shouldUnregister' | 'defaultValue' | 'rules' | 'control'
>;

/**
 * @description хук предназначен для предоставления пропсов компонента с input без пропсов RHF
 */
export const useFormInputProps = <
  TFormInputProps extends object,
  TFieldValues extends FieldValues,
>(
  props: WithFormFieldProps<TFormInputProps, TFieldValues>,
) => {
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
