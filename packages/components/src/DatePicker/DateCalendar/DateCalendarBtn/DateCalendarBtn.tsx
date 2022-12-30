import { ReactNode, forwardRef } from 'react';

import { ButtonProps } from '../../../Button';
import { DateCalendarBtnTooltip } from '../DateCalendarBtnTooltip';

import { DateCalendarBtnWrapper } from './styles';

export type DateCalendarArrowBtnProps = Omit<ButtonProps, 'variant'> & {
  title?: string;
  children: ReactNode;
};

export const DateCalendarBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarArrowBtnProps
>(({ title = '', disabled, selected, ...props }, ref) => (
  <DateCalendarBtnTooltip title={title} isActive={!disabled}>
    <DateCalendarBtnWrapper
      ref={ref}
      variant={selected ? 'contained' : 'text'}
      aria-selected={selected}
      disabled={disabled}
      {...props}
    />
  </DateCalendarBtnTooltip>
));
