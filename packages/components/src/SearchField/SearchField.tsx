import { type ChangeEvent, forwardRef, useState } from 'react';

import { type TextFieldProps } from '../TextField';
import { CrossOutlineMd, SearchOutlineMd } from '../../../icons';

import { StyledIconButton, StyledTextField } from './styles';

export type SearchFieldProps = Omit<
  TextFieldProps,
  'startAdornment' | 'endAdornment'
>;

export const SearchField = forwardRef<HTMLDivElement, SearchFieldProps>(
  (
    {
      margin = 'none',
      placeholder = 'Поиск',
      onChange,
      disabled,
      value: propsValue,
      defaultValue,
      ...props
    }: SearchFieldProps,
    ref,
  ) => {
    const [value, setValue] = useState(`${defaultValue || propsValue || ''}`);

    const handleChangeValue = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setValue(event.target.value);
      onChange?.(event);
    };

    const handleClickClearValue = () => {
      setValue('');
    };

    const isClearButtonActive = Boolean(value.length);

    return (
      <StyledTextField
        margin={margin}
        placeholder={placeholder}
        startAdornment={<SearchOutlineMd />}
        disabled={disabled}
        endAdornment={
          <StyledIconButton
            variant="text"
            onClick={handleClickClearValue}
            disabled={disabled || !isClearButtonActive}
            isActive={isClearButtonActive}
          >
            <CrossOutlineMd />
          </StyledIconButton>
        }
        onChange={handleChangeValue}
        value={value}
        ref={ref}
        {...props}
      />
    );
  },
);
