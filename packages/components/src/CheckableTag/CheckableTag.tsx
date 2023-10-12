import { forwardRef } from 'react';

import { TagAddonProps } from '../Tag';

import {
  CheckableTagHiddenInput,
  CheckableTagStyled,
  CheckableTagWrapper,
} from './styles';
import { CheckableTagProps } from './types';

/**
 * @description Тег с возможностью быть checked (по логике Checkbox)
 * @example
 * <CheckableTag
   * label="tag"
   * variant="contained"
   * color="success"
   * checked
   * onChange={handleChecked}
   * endAddon={(props: TagBadgeProps) => ( <TagBadge {...props} badgeContent={'12'} />)}
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
          startAddon={checkableStartAddon}
          endAddon={checkableEndAddon}
          {...tagProps}
        />
      </CheckableTagWrapper>
    );
  },
);
