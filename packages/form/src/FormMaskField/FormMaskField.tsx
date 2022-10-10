import { MaskField, MaskFieldProps } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldErrorProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormMaskFieldValue = string;

export type FormMaskFieldProps<FieldValues extends object> = WithFormFieldProps<
  MaskFieldProps,
  FieldValues
>;

/**
 * @description Тестовый инпут с маской для формы
 */
export function FormMaskField<FieldValues extends object>({
  unmask = true,
  ...props
}: FormMaskFieldProps<FieldValues>) {
  const { field, fieldState } = useController(props);
  const errorProps = useFieldErrorProps(fieldState);

  return <MaskField {...field} unmask={unmask} {...props} {...errorProps} />;
}
