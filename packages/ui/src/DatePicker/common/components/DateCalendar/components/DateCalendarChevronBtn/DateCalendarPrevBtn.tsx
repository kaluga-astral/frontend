import { PreviousOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { DatePickerContext } from '../../../../../../DatePickerProvider';

import { DateCalendarPrevBtnWrapper } from './styles';
import { DateCalendarChevronBtnProps } from './types';

export const DateCalendarPrevBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const {
    languageMap: { previous },
  } = useContext(DatePickerContext);

  return (
    <DateCalendarPrevBtnWrapper
      ref={ref}
      disabled={!Boolean(props.onClick)}
      title={`${isPlural ? previous.plural : previous.single} ${postfixTitle}`}
      {...props}
    >
      <PreviousOutlineMd />
    </DateCalendarPrevBtnWrapper>
  );
});
