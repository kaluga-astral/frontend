import {
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  ListItemIcon,
} from '@mui/material';
import { HTMLAttributes } from 'react';
import { ChevronDOutlineMd, CrossSmOutlineSm } from '@astral/icons';

import { TextField } from '../TextField';
import { Tag } from '../Tag';
import { MenuItem } from '../MenuItem';
import { Checkbox } from '../Checkbox';

import { AutocompleteProps, AutocompleteValueProps } from './types';
import { StyledAutocomplete } from './styled';

export const Autocomplete = ({
  multiple,
  placeholder = 'Выберите вариант',
  error,
  success,
  helperText,
  label,
  renderInput,
  size = 'medium',
  ...props
}: AutocompleteProps) => {
  const renderTags = (
    tags: AutocompleteValueProps[],
    getTagProps: AutocompleteRenderGetTagProps
  ) => {
    return tags.map(({ title }: AutocompleteValueProps, index: number) => (
      <Tag color="grey" label={title} {...getTagProps({ index })} />
    ));
  };

  const renderCustomInput = (inputParams: AutocompleteRenderInputParams) => (
    <TextField
      {...inputParams}
      placeholder={placeholder}
      label={label}
      success={success}
      error={error}
      helperText={helperText}
    />
  );

  const renderOption = (
    option: HTMLAttributes<HTMLLIElement> & { key?: string }
  ) => {
    const selected = Boolean(option['aria-selected']);

    return (
      <MenuItem {...option}>
        {multiple && (
          <ListItemIcon>
            <Checkbox checked={selected} />
          </ListItemIcon>
        )}
        {option.key}
      </MenuItem>
    );
  };

  return (
    <StyledAutocomplete
      {...props}
      size={size}
      multiple={multiple}
      getOptionLabel={(option: AutocompleteValueProps) => option.title}
      disableCloseOnSelect={multiple}
      renderTags={renderTags}
      renderInput={renderInput || renderCustomInput}
      renderOption={renderOption}
      popupIcon={<ChevronDOutlineMd />}
      clearIcon={<CrossSmOutlineSm />}
    />
  );
};
