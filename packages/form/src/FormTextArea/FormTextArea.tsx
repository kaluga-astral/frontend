import { TextArea, type TextAreaProps } from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

export type FormTextAreaProps<FieldValues extends object> = WithFormFieldProps<
  TextAreaProps,
  FieldValues
>;

/**
 * @description Адаптер для TextArea
 */
export const FormTextArea = <FieldValues extends object>(
  props: FormTextAreaProps<FieldValues>,
) => {
  const fieldProps = useFormFieldProps<
    FormTextAreaProps<FieldValues>,
    FieldValues
  >(props);

  return <TextArea {...fieldProps} />;
};
