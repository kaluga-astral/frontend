import {
  TreeLikeAutocomplete,
  type TreeLikeAutocompleteProps,
  type TreeLikeAutocompleteValue,
} from '@astral/components';

import { useFormFieldProps } from '../hooks';
import { type WithFormFieldProps } from '../types';

/**
 * Тип значения, которое сетится в state формы
 */
export type FormTreeLikeAutocompleteValue = TreeLikeAutocompleteValue;

export type FormTreeLikeAutocompleteProps<FieldValues extends object> =
  WithFormFieldProps<TreeLikeAutocompleteProps, FieldValues>;

/**
 * FormTreeAutocomplete для формы
 */
export const FormTreeLikeAutocomplete = <FieldValues extends object>(
  props: FormTreeLikeAutocompleteProps<FieldValues>,
) => {
  const { error, ...fieldProps } = useFormFieldProps<
    TreeLikeAutocompleteProps,
    FieldValues
  >(props);

  return <TreeLikeAutocomplete isError={error} {...fieldProps} />;
};
