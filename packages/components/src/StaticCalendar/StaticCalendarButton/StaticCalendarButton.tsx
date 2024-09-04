import { type ReactNode, forwardRef } from 'react';

import { type ButtonProps } from '../../Button';
import { StaticCalendarButtonTooltip } from '../StaticCalendarButtonTooltip';

import { Wrapper } from './styles';

export type StaticDateCalendarButtonProps = Omit<
  ButtonProps,
  'variant' | 'title'
> & {
  tooltipTitle?: ReactNode;
};

export const StaticCalendarButton = forwardRef<
  HTMLButtonElement,
  StaticDateCalendarButtonProps
>(({ tooltipTitle, disabled, selected, ...props }, ref) => (
  <StaticCalendarButtonTooltip title={tooltipTitle} isActive={!disabled}>
    <Wrapper
      ref={ref}
      variant={selected ? 'contained' : 'text'}
      aria-selected={selected}
      disabled={disabled}
      {...props}
    />
  </StaticCalendarButtonTooltip>
));
