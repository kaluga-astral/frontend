import { ReactNode, forwardRef } from 'react';

import { ButtonProps } from '../../../../../../Button';
import { Tooltip } from '../../../../../../Tooltip';

import { DateCalendarBtnWrapper } from './styles';

export type DateCalendarArrowBtnProps = Omit<ButtonProps, 'variant'> & {
  title?: string;

  children: ReactNode;
};

export const DateCalendarBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarArrowBtnProps
>(({ title, disabled, ...props }, ref) =>
  disabled ? (
    <DateCalendarBtnWrapper ref={ref} variant="text" disabled {...props} />
  ) : (
    <Tooltip title={title || ''} disableInteractive>
      <DateCalendarBtnWrapper ref={ref} variant="text" {...props} />
    </Tooltip>
  ),
);
