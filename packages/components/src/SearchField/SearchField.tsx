import { type ChangeEvent, forwardRef, useRef, useState } from 'react';
import { CrossOutlineMd } from '@astral/icons';

import { type TextFieldProps } from '../TextField';

import { StyledIconButton, StyledSearchIcon, StyledTextField } from './styles';

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

    const inputRef = useRef<HTMLInputElement>();

    const handleChangeValue = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setValue(event.target.value);
      onChange?.(event);
    };

    const handleClickClearValue = () => {
      setValue('');
      inputRef.current?.focus();
    };

    const handleClickStartAdornment = () => {
      inputRef.current?.focus();
    };

    const isClearButtonActive = Boolean(value.length);

    return (
      <StyledTextField
        margin={margin}
        placeholder={placeholder}
        startAdornment={
          <StyledSearchIcon onClick={handleClickStartAdornment} />
        }
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
        inputRef={inputRef}
        {...props}
      />
    );
  },
);
