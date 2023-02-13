import { ChangeEvent, forwardRef } from 'react';

import { TagProps } from '../Tag';

import {
  CheckableTagHiddenInput,
  CheckableTagStyled,
  CheckableTagWrapper,
} from './styles';

export type CheckableTagProps = Omit<TagProps, 'onChange'> & {
  /**
   * Состояние тега
   */
  checked?: boolean;
  /**
   * Обработчик события клика
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Блокировка клика по тегу
   */
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
      <CheckableTagWrapper>
        <CheckableTagHiddenInput
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <CheckableTagStyled
          checked={checked}
          variant={variant}
          color={color}
          disabled={disabled}
          {...tagProps}
        />
      </CheckableTagWrapper>
    );
  },
);
