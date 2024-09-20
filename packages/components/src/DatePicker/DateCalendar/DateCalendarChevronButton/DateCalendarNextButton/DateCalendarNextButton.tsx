import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../../ConfigProvider';
import { type DateCalendarChevronBtnProps } from '../types';

import { NextIcon, Wrapper } from './styles';

export const DateCalendarNextButton = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const { next } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <Wrapper
      ref={ref}
      disabled={!Boolean(props.onClick)}
      tooltipTitle={`${isPlural ? next.plural : next.single} ${postfixTitle}`}
      {...props}
    >
      <NextIcon />
    </Wrapper>
  );
});
