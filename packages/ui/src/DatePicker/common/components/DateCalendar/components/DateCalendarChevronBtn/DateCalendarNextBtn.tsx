import { NextOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { DatePickerContext } from '../../../../../../DatePickerProvider';

import { DateCalendarNextBtnWrapper } from './styles';
import { DateCalendarChevronBtnProps } from './types';

export const DateCalendarNextBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const {
    languageMap: { next },
  } = useContext(DatePickerContext);

  return (
    <DateCalendarNextBtnWrapper
      ref={ref}
      disabled={!Boolean(props.onClick)}
      title={`${isPlural ? next.plural : next.single} ${postfixTitle}`}
      {...props}
    >
      <NextOutlineMd />
    </DateCalendarNextBtnWrapper>
  );
});
