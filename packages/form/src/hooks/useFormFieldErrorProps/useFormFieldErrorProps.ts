import { TextFieldProps } from '@astral/components';
import { ControllerFieldState } from 'react-hook-form';

type UseFormFieldErrorPropsResult = Pick<
  TextFieldProps,
  'error' | 'helperText'
>;

/**
 * @description хук предназначен для предоставления пропсов для отображения ошибки филда.
 */
export const useFormFieldErrorProps = (
  fieldState: Pick<ControllerFieldState, 'error'>,
): UseFormFieldErrorPropsResult => {
  return {
    error: Boolean(fieldState.error),
    helperText: fieldState.error?.message,
  };
};
