import { ChangeEvent, forwardRef } from 'react';

import { TagProps } from '../Tag';

import { HiddenInput, Root, StyledTag } from './styles';

export type CheckableTagProps = Omit<TagProps, 'onChange'> & {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const CheckableTag = forwardRef<HTMLInputElement, CheckableTagProps>(
  (
    {
      checked,
      variant = 'light',
      color = 'grey',
      onChange,
      disabled,
      ...tagProps
    },
    ref,
  ) => {
    return (
      <Root>
        <HiddenInput
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <StyledTag
          checked={checked}
          variant={variant}
          color={color}
          disabled={disabled}
          {...tagProps}
        />
      </Root>
    );
  },
);
