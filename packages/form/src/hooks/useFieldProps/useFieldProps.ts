import { ControllerFieldState, FieldValues } from 'react-hook-form';

import { useFieldErrorProps } from '../useFieldErrorProps';
import { useInputProps } from '../useInputProps';

/**
 * @description хук предназначен для предоставления пропсов input без пропсов rhf и error пропсов.
 */
export const useFieldProps = <FieldProps extends FieldValues>(
  props: FieldProps,
  fieldState: ControllerFieldState,
) => {
  const inputProps = useInputProps(props);
  const errorProps = useFieldErrorProps(fieldState);

  return { ...inputProps, ...errorProps };
};
