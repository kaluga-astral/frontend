import { NextOutlineMd } from '@astral/icons';
import { forwardRef } from 'react';

import { DateCalendarNextBtnWrapper } from './styles';
import { DateCalendarChevronBtnProps } from './types';

export const DateCalendarNextBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => (
  <DateCalendarNextBtnWrapper
    ref={ref}
    disabled={!Boolean(props.onClick)}
    title={`Следующи${isPlural ? 'е' : 'й'} ${postfixTitle}`}
    {...props}
  >
    <NextOutlineMd />
  </DateCalendarNextBtnWrapper>
));
