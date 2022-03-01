import React, { ReactNode } from 'react';
import { ChevronDOutlineMd } from '@astral/icons';

import { TextField } from '../TextField';
import { Tag } from '../Tag';
import { CircularProgress } from '../CircularProgress';
import { MenuItem } from '../MenuItem';

import { Placeholder, ProgressWrapper, TagsWrapper } from './styled';
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

  const isNoData = !Boolean(React.Children.count(children));

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
      <Placeholder value="">placeholder</Placeholder>

      {loading && (
        <ProgressWrapper>
          <CircularProgress color="primary" />
        </ProgressWrapper>
      )}
      {!loading && children}
      {!loading && isNoData && <MenuItem disabled>Нет данных</MenuItem>}
    </TextField>
  );
};
