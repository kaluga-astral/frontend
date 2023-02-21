import { MaskField, MaskFieldProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { WithFormFieldProps } from '../types';

/**
 * @description Тип значения, которое сетится в state формы
 */
export type FormMaskFieldValue = string;

export type FormMaskFieldProps = WithFormFieldProps<MaskFieldProps>;

/**
 * @description Адаптер для MaskField
 */
export function FormMaskField(props: FormMaskFieldProps) {
  const fieldProps = useFormFieldProps(props);

  return <MaskField {...fieldProps} />;
}
