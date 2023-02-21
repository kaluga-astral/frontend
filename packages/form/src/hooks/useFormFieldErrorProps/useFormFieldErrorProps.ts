import { TextFieldProps } from '@astral/components';
import { ControllerFieldState } from 'react-hook-form';

export type UseFormFieldErrorPropsReturn = Pick<
  TextFieldProps,
  'error' | 'helperText'
>;

/**
 * @description хук предназначен для предоставления пропсов для отображения ошибки field
 */
export const useFormFieldErrorProps = (
  fieldState: Pick<ControllerFieldState, 'error'>,
): UseFormFieldErrorPropsReturn => {
  return {
    error: Boolean(fieldState.error),
    helperText: fieldState.error?.message,
  };
};
