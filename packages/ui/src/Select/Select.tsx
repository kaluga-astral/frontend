import { ReactNode } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { TextField } from '../TextField';
import { Tag } from '../Tag';
import { MenuItem } from '../MenuItem';
import { CircularProgress } from '../CircularProgress';

import { ProgressWrapper, TagsWrapper } from './styled';
import { SelectProps } from './types';

export const Select = ({
  multiple,
  loading,
  value = multiple ? [] : '',
  placeholder,
  helperText,
  success,
  children,
  label,
  error,
  ...props
}: SelectProps) => {
  // TODO: Не выходит разрулить типы тут =\
  // @ts-ignore
  const renderValue = (selectedOptions): ReactNode => {
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      return (
        <TagsWrapper>
          {selectedOptions.map((option) => (
            <Tag key={option} color="grey" label={option} />
          ))}
        </TagsWrapper>
      );
    }

    if (!selectedOptions.length) {
      return placeholder;
    }

    return selectedOptions;
  };

  return (
    <TextField
      select
      value={value}
      label={label}
      helperText={helperText}
      error={error}
      success={success}
      SelectProps={{
        ...props,
        multiple,
        renderValue,
        displayEmpty: true,
        IconComponent: ChevronDOutlineMd,
      }}
    >
      <MenuItem sx={{ display: 'none' }} value="">
        placeholder
      </MenuItem>

      {loading && (
        <ProgressWrapper>
          <CircularProgress color="primary" />
        </ProgressWrapper>
      )}
      {!loading && children}
    </TextField>
  );
};
