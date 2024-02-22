import { type ReactNode, forwardRef } from 'react';

import { type ButtonProps } from '../../../Button';
import { DateCalendarButtonTooltip } from '../DateCalendarButtonTooltip';

import { StyledButton } from './styles';

export type DateCalendarButtonProps = Omit<ButtonProps, 'variant'> & {
  title?: string;
  children: ReactNode;
};

export const DateCalendarButton = forwardRef<
  HTMLButtonElement,
  DateCalendarButtonProps
>(({ title = '', disabled, selected, ...props }, ref) => (
  <DateCalendarButtonTooltip title={title} isActive={!disabled}>
    <StyledButton
      ref={ref}
      variant={selected ? 'contained' : 'text'}
      aria-selected={selected}
      disabled={disabled}
      {...props}
    />
  </DateCalendarButtonTooltip>
));
