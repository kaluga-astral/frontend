import { MaskField, MaskFieldProps, useForwardedRef } from '@astral/ui';
import { useController } from 'react-hook-form';

import { useFieldProps } from '../hooks';
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
 * @description Адаптер для MaskField
 */
export function FormMaskField<FieldValues extends object>(
  props: FormMaskFieldProps<FieldValues>,
) {
  const { field, fieldState } = useController(props);
  const fieldProps = useFieldProps(props, fieldState);

  const ref = useForwardedRef(field.ref);

  return <MaskField {...field} ref={ref} {...fieldProps} />;
}
