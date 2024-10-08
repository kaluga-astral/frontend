import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../../ConfigProvider';
import { type DateCalendarChevronBtnProps } from '../types';

import { PrevIcon, Wrapper } from './styles';

export const DateCalendarPrevButton = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const { previous } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <Wrapper
      ref={ref}
      disabled={!Boolean(props.onClick)}
      tooltipTitle={`${isPlural ? previous.plural : previous.single} ${postfixTitle}`}
      {...props}
    >
      <PrevIcon />
    </Wrapper>
  );
});
