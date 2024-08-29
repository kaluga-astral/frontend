import {
  TreeAutocomplete,
  type TreeAutocompleteProps,
  type TreeAutocompleteValue,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

/**
 * Тип значения, которое сетится в state формы
 */
export type FormTreeAutocompleteValue = TreeAutocompleteValue;

export type FormTreeAutocompleteProps<FieldValues extends object> =
  WithFormFieldProps<TreeAutocompleteProps, FieldValues>;

/**
 * FormTreeAutocomplete для формы
 */
export const FormTreeAutocomplete = <FieldValues extends object>(
  props: FormTreeAutocompleteProps<FieldValues>,
) => {
  const { error, ...fieldProps } = useFormFieldProps<
    TreeAutocompleteProps,
    FieldValues
  >(props);

  return <TreeAutocomplete isError={error} {...fieldProps} />;
};
