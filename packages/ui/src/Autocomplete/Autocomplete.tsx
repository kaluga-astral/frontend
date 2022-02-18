import { useMemo } from 'react';
import { ChevronDOutlineMd, CrossSmOutlineSm } from '@astral/icons';
import { useAutocomplete } from '@mui/base';
import { InputAdornment, InputLabel, ListItemIcon } from '@mui/material';

import { MenuItem } from '../MenuItem';
import { Tag } from '../Tag';
import { MenuList } from '../MenuList';
import { FormHelperText } from '../FormHelperText';
import { Checkbox } from '../Checkbox';

import { InputWrapper, StyledFormControl, TagsWrapper } from './styled';
import { AutocompleteProps } from './types';

export const Autocomplete = ({
  placeholder = 'Выберите вариант',
  multiple = false,
  defaultValue,
  startAdornment,
  endAdornment,
  helperText,
  options,
  success,
  error,
  label,
  size = 'small',
  ...props
}: AutocompleteProps) => {
  const {
    getInputLabelProps,
    getRootProps,
    groupedOptions,
    getListboxProps,
    getOptionProps,
    getInputProps,
    popupOpen,
    setAnchorEl,
    getTagProps,
    getClearProps,
    focused,
    value,
  } = useAutocomplete({
    ...props,
    defaultValue,
    openOnFocus: true,
    disableCloseOnSelect: multiple,
    getOptionLabel: ({ title }) => title,
    multiple,
    options,
  });

  const placeholderText = useMemo(() => {
    if (Array.isArray(value) && value.length) return '';

    return placeholder;
  }, [value]);

  const renderTags = () => {
    if (Array.isArray(value)) {
      return value.map(({ title }, index) => {
        const tagProps = getTagProps({ index });

        return (
          <Tag
            {...tagProps}
            label={title}
            deleteIcon={<CrossSmOutlineSm />}
            color="grey"
          />
        );
      });
    }

    return null;
  };

  const listOptions = useMemo(() => {
    if (!groupedOptions.length) return null;

    const listItems = groupedOptions.map((option, index) => {
      const optionsProps = getOptionProps({ option, index });
      const checked = optionsProps['aria-selected'] as boolean;

      return (
        <MenuItem {...optionsProps}>
          {multiple && (
            <ListItemIcon>
              <Checkbox checked={checked} />
            </ListItemIcon>
          )}
          {option.title}
        </MenuItem>
      );
    });

    const listboxProps = getListboxProps();

    return <MenuList {...listboxProps}>{listItems}</MenuList>;
  }, [groupedOptions, getListboxProps]);

  return (
    <StyledFormControl>
      <InputLabel {...getInputLabelProps()}>{label}</InputLabel>
      <InputWrapper
        {...getRootProps()}
        focused={focused}
        popupOpen={popupOpen}
        success={success}
        error={error}
        size={size}
      >
        <InputAdornment position="start">{startAdornment}</InputAdornment>
        <TagsWrapper gap={1} spacing={1} direction="row" ref={setAnchorEl}>
          {renderTags()}
          <input placeholder={placeholderText} {...getInputProps()} />
        </TagsWrapper>
        <InputAdornment position="end">
          {endAdornment}
          <CrossSmOutlineSm {...getClearProps()} />
          <ChevronDOutlineMd />
        </InputAdornment>
      </InputWrapper>
      <FormHelperText error={error} success={success}>
        {helperText}
      </FormHelperText>
      {listOptions}
    </StyledFormControl>
  );
};
