import { ControllerFieldState } from 'react-hook-form';

export const getErrorMessage = (formState: ControllerFieldState) =>
  formState.error?.message;
