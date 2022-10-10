import { PreviousOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../../../../ConfigProvider';

import { DateCalendarPrevBtnWrapper } from './styles';
import { DateCalendarChevronBtnProps } from './types';

export const DateCalendarPrevBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const { previous } = useContext(ConfigContext).datePickerLanguageMap;

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
