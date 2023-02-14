import { ChangeEvent, forwardRef } from 'react';

import { TagProps } from '../Tag';

import {
  CheckableTagHiddenInput,
  CheckableTagStyled,
  CheckableTagWrapper,
  getBadgeColor,
} from './styles';

export type CheckableTagProps = Omit<TagProps, 'onChange'> & {
  /**
   * Состояние тега
   */
  checked?: boolean;
  /**
   * Обработчик изменения состояния тега
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
      badge,
      badgeColor = null,
      ...tagProps
    },
    ref,
  ) => {
    const preparedBadgeColor = badge
      ? getBadgeColor({
          checked,
          disabled,
          defaultColor: badgeColor,
        })
      : null;

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
          badge={badge}
          badgeColor={preparedBadgeColor}
          {...tagProps}
        />
      </CheckableTagWrapper>
    );
  },
);
