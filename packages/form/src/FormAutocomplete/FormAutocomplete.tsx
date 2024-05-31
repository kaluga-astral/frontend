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

  // Внимание, костыль.
  // React-hook-form в последних версиях стал требовать для всех полей указывать defaultValues. Если defaultValues не указывать, то form.setValue работать не будет.
  // Это breaking changes для наших проектов. Текущее решение прокидывает в input дефолтное значение, которое rhf может получить через ref и обработать так, как мы ожидаем
  // fallbackValue не установится в state формы, это нужно только для ожидаемой работы rhf
  const fallbackValue = (
    fieldProps.multiple ? [] : null
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
