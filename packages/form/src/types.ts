import { UseControllerProps } from 'react-hook-form';

/**
 * @description Добавляет к переданным пропсам типы для react-hook-form. Позволяет переиспользовать логику типизации для филдов формы.
 * @example WithFormFieldProps<TextFieldProps, FieldValues>;
 */
export type WithFormFieldProps<
  Props extends object,
  FieldValues extends object,
> = Omit<Props, 'name' | 'error'> & UseControllerProps<FieldValues>;
