import { TextFieldProps } from '@astral/components';
import { ControllerFieldState } from 'react-hook-form';

type UseFieldErrorPropsResult = Pick<TextFieldProps, 'error' | 'helperText'>;

/**
 * @description хук предназначен для предоставления пропсов для отображения ошибки филда.
 */
export const useFieldErrorProps = (
  fieldState: Pick<ControllerFieldState, 'error'>,
): UseFieldErrorPropsResult => {
  return {
    error: Boolean(fieldState.error),
    helperText: fieldState.error?.message,
  };
};
