import { NextOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../../ConfigProvider';
import { type DateCalendarChevronBtnProps } from '../types';

import { StyledButton } from './styles';

export const DateCalendarNextButton = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const { next } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <StyledButton
      ref={ref}
      disabled={!Boolean(props.onClick)}
      title={`${isPlural ? next.plural : next.single} ${postfixTitle}`}
      {...props}
    >
      <NextOutlineMd />
    </StyledButton>
  );
});
