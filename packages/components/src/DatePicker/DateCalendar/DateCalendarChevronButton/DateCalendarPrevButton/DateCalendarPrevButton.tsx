import { PreviousOutlineMd } from '@astral/icons';
import { forwardRef, useContext } from 'react';

import { ConfigContext } from '../../../../ConfigProvider';
import { type DateCalendarChevronBtnProps } from '../types';

import { StyledButton } from './styles';

export const DateCalendarPrevButton = forwardRef<
  HTMLButtonElement,
  DateCalendarChevronBtnProps
>(({ postfixTitle, isPlural, ...props }, ref) => {
  const { previous } = useContext(ConfigContext).datePickerLanguageMap;

  return (
    <StyledButton
      ref={ref}
      disabled={!Boolean(props.onClick)}
      title={`${isPlural ? previous.plural : previous.single} ${postfixTitle}`}
      {...props}
    >
      <PreviousOutlineMd />
    </StyledButton>
  );
});
