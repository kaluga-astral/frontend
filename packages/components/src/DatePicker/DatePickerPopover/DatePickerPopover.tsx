import { type PropsWithChildren } from 'react';

import { type PopoverProps } from '../../Popover';
import { type WithoutEmotionSpecific } from '../../types';

import { InnerContainer, StyledPopover } from './styles';

export type DatePickerPopoverProps = PropsWithChildren<
  Omit<
    WithoutEmotionSpecific<PopoverProps>,
    'children' | 'disablePortal' | 'transition'
  >
>;

export const DatePickerPopover = ({
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: DatePickerPopoverProps) => (
  <StyledPopover
    elevation={1}
    disableAutoFocus={true}
    disableRestoreFocus={true}
    {...props}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    <InnerContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </InnerContainer>
  </StyledPopover>
);
