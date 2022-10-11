import { NextOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../ConfigProvider';

import { DateCalendarNextBtnWrapper } from './styles';
import { DateCalendarChevronBtnProps } from './types';

export const DateCalendarNextBtn = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const { next } = useContext(ConfigContext).datePickerLanguageMap;

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
