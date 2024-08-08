import { type ChangeEvent, forwardRef } from 'react';

import { type TagAddonProps, type TagProps } from '../Tag';

import { HiddenInput, StyledTag, Wrapper } from './styles';
import { type CheckableTagAddon } from './types';

export type CheckableTagProps = Omit<
  TagProps,
  'onChange' | 'startAddon' | 'endAddon'
> & {
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
  /**
   * Контент слева от label
   */
  startAddon?: CheckableTagAddon;

  /**
   * Контент справа от label
   */
  endAddon?: CheckableTagAddon;
};

/**
 * Тег с возможностью быть checked (по логике Checkbox)
 * @example
 * <CheckableTag
   * label="tag"
   * variant="contained"
   * color="success"
   * checked
   * onChange={handleChecked}
   * endAddon={(props: TagBadgeProps) => (<TagBadge {...props} badgeContent={'12'} />)}
 * />

 */

export const CheckableTag = forwardRef<HTMLInputElement, CheckableTagProps>(
  (
    {
      checked,
      variant = 'light',
      color = 'grey',
      onChange,
      disabled,
      startAddon: StartAddon,
      endAddon: EndAddon,
      ...tagProps
    },
    ref,
  ) => {
    const checkableStartAddon = (props: TagAddonProps) =>
      StartAddon ? (
        <StartAddon checked={checked} disabled={disabled} {...props} />
      ) : null;

    const checkableEndAddon = (props: TagAddonProps) =>
      EndAddon ? (
        <EndAddon checked={checked} disabled={disabled} {...props} />
      ) : null;

    return (
      <Wrapper>
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
          startAddon={checkableStartAddon}
          endAddon={checkableEndAddon}
          {...tagProps}
        />
      </Wrapper>
    );
  },
);
