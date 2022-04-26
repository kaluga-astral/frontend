import {
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  ListItemIcon,
  Autocomplete as MuiAutocomplete,
} from '@mui/material';
import { HTMLAttributes, useCallback } from 'react';
import { ChevronDOutlineMd, CrossSmOutlineSm } from '@astral/icons';

import { TextField } from '../TextField';
import { Tag } from '../Tag';
import { MenuItem } from '../MenuItem';
import { Checkbox } from '../Checkbox';

import { AutocompleteProps } from './types';

export const Autocomplete = <
  AutocompleteValueProps,
  Multiple extends boolean,
  DisableClearable extends boolean,
  FreeSolo extends boolean
>(
  props: AutocompleteProps<
    AutocompleteValueProps,
    Multiple,
    DisableClearable,
    FreeSolo
  >
) => {
  const {
    multiple,
    placeholder,
    error,
    success,
    helperText,
    label,
    size = 'medium',
    getOptionLabel,
    renderOption: externalRenderOption,
    ...restProps
  } = props;

  const renderTags = useCallback(
    (
      tags: AutocompleteValueProps[],
      getTagProps: AutocompleteRenderGetTagProps
    ) => {
      return tags.map((tag: AutocompleteValueProps, index: number) => {
        const title = (getOptionLabel && getOptionLabel(tag)) || '';

        return (
          <Tag
            deleteIcon={<CrossSmOutlineSm />}
            color="grey"
            label={title}
            {...getTagProps({ index })}
          />
        );
      });
    },
    [getOptionLabel]
  );

  const renderInput = useCallback(
    (inputParams: AutocompleteRenderInputParams) => (
      <TextField
        {...inputParams}
        placeholder={placeholder}
        label={label}
        success={success}
        error={error}
        helperText={helperText}
        size={size}
      />
    ),
    [placeholder, label, success, error, helperText, size]
  );

  const renderOption = useCallback(
    (
      optionProps: HTMLAttributes<HTMLLIElement> & { key?: string },
      option: AutocompleteValueProps,
      optionState: AutocompleteRenderOptionState
    ) => {
      if (externalRenderOption) {
        return externalRenderOption(optionProps, option, optionState);
      }

      const selected = Boolean(optionProps['aria-selected']);

      return (
        <MenuItem {...optionProps} key={optionProps.id}>
          {multiple && (
            <ListItemIcon>
              <Checkbox checked={selected} />
            </ListItemIcon>
          )}
          {optionProps.key}
        </MenuItem>
      );
    },
    [multiple, externalRenderOption]
  );

  return (
    <MuiAutocomplete
      {...restProps}
      size={size}
      multiple={multiple}
      getOptionLabel={getOptionLabel}
      disableCloseOnSelect={multiple}
      renderTags={renderTags}
      renderInput={renderInput}
      renderOption={renderOption}
      popupIcon={<ChevronDOutlineMd />}
      clearIcon={<CrossSmOutlineSm />}
      componentsProps={{ clearIndicator: { disableRipple: true } }}
      noOptionsText="Нет данных"
    />
  );
};
