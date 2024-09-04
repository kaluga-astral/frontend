import { NextOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../../ConfigProvider';
import { type DateCalendarChevronBtnProps } from '../types';

import { Wrapper } from './styles';

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
      <NextOutlineMd />
    </Wrapper>
  );
});
