import { ControllerFieldState, FieldValues } from 'react-hook-form';

import { useFormFieldErrorProps } from '../useFormFieldErrorProps';
import { useFormInputProps } from '../useFormInputProps';

/**
 * @description хук предназначен для предоставления пропсов field без пропсов rhf
 */
export const useFormFieldProps = <FieldProps extends FieldValues>(
  props: FieldProps,
  fieldState: ControllerFieldState,
) => {
  const inputProps = useFormInputProps(props);
  const errorProps = useFormFieldErrorProps(fieldState);

  return { ...inputProps, ...errorProps };
};
