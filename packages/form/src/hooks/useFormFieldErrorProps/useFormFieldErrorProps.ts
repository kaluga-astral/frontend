import { type TextFieldProps } from '@astral/components';
import { type ControllerFieldState } from 'react-hook-form';

type UseFormFieldErrorPropsReturn = Pick<
  TextFieldProps,
  'error' | 'helperText'
>;

/**
 * хук предназначен для предоставления пропсов для отображения ошибки field
 */
export const useFormFieldErrorProps = (
  fieldState: Pick<ControllerFieldState, 'error'>,
): UseFormFieldErrorPropsReturn => {
  const { error } = fieldState;

  if (error) {
    return {
      error: true,
      helperText: error?.message,
    };
  }

  return {
    error: false,
  };
};
