import { Autocomplete, type AutocompleteProps } from '@astral/components';
import { type SyntheticEvent, useCallback } from 'react';

import { type WithFormFieldProps } from '../types';
import { useFormFieldProps } from '../hooks';

type AutocompleteInputChangeReason = 'input' | 'reset' | 'clear';

export type FormAutocompleteProps<
  FieldValues extends object,
  Option,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
> = WithFormFieldProps<
  AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>,
  FieldValues
>;

/**
 * @description Адаптер для Select
 */
export const FormAutocomplete = <
  FieldValues extends object,
  Option,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean,
>(
  props: FormAutocompleteProps<
    FieldValues,
    Option,
    Multiple,
    DisableClearable,
    FreeSolo
  >,
) => {
  const fieldProps = useFormFieldProps<
    FormAutocompleteProps<
      FieldValues,
      Option,
      Multiple,
      DisableClearable,
      FreeSolo
    >,
    FieldValues
  >(props);

  const handleOnChange = <Value,>(
    _event: SyntheticEvent<Element, Event>,
    value: Value,
  ) => {
    fieldProps.onChange(value);
  };

  const handleOnInputChange = useCallback(
    (
      _event: SyntheticEvent<Element, Event>,
      value: string,
      reason: AutocompleteInputChangeReason,
    ) => {
      //Устанавливаем значение в форму если триггером изменения инпута был пользовательский ввод
      if (fieldProps.freeSolo && reason === 'input') {
        fieldProps.onChange(value);
      }

      fieldProps.onInputChange?.(_event, value, reason);
    },
    [fieldProps.freeSolo, fieldProps.onInputChange],
  );

  const fallbackValue = (
    fieldProps.multiple ? [] : ''
  ) as typeof fieldProps.value;

  return (
    <Autocomplete
      {...fieldProps}
      value={fieldProps.value || fallbackValue}
      onInputChange={handleOnInputChange}
      onChange={handleOnChange}
    />
  );
};
