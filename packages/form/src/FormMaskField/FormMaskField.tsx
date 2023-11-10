import type { MaskFieldProps } from '@astral/components';
import { MaskField } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import type { WithFormFieldProps } from '../types';

export type FormMaskFieldProps<FieldValues extends object> = WithFormFieldProps<
  MaskFieldProps,
  FieldValues
>;

/**
 * @description Адаптер для MaskField
 */
export const FormMaskField = <FieldValues extends object>(
  props: FormMaskFieldProps<FieldValues>,
) => {
  const fieldProps = useFormFieldProps<
    FormMaskFieldProps<FieldValues>,
    FieldValues
  >(props);

  return <MaskField {...fieldProps} />;
};
