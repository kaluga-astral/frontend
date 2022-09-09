import { PreviousOutlineMd } from '@astral/icons';
import { forwardRef } from 'react';

import { DateCalendarPrevBtnWrapper } from './styles';
import { DateCalendarChevronBtnProps } from './types';

export const DateCalendarPrevBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => (
  <DateCalendarPrevBtnWrapper
    ref={ref}
    disabled={!Boolean(props.onClick)}
    title={`Предыдущи${isPlural ? 'е' : 'й'} ${postfixTitle}`}
    {...props}
  >
    <PreviousOutlineMd />
  </DateCalendarPrevBtnWrapper>
));
