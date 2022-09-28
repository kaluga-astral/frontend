import { TextFieldProps } from '@astral/ui';
import { ControllerFieldState } from 'react-hook-form';

type UseFieldErrorPropsResult = Pick<TextFieldProps, 'error' | 'helperText'>;

/**
 * @description хук предназначен для предоставления пропсов для отображения ошибки филда.
 */
export const useFieldErrorProps = (
  fieldState: Pick<ControllerFieldState, 'error'>,
): UseFieldErrorPropsResult => {
  const errorMessage = fieldState.error?.message;

  return {
    error: Boolean(errorMessage),
    helperText: errorMessage,
  };
};
