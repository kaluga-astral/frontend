import { useMemo } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { NextOutlineMd, PreviousOutlineMd } from '@astral/icons';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import { IconButton } from '../../IconButton';

import { StyledDate, StyledDatePickerHeaderWrapper } from './styled';

export const DatePickerHeader = (props: ReactDatePickerCustomHeaderProps) => {
  const { increaseMonth, decreaseMonth, date } = props;
  const localizedDate = useMemo(
    () => format(date, 'LLLL yyy', { locale: ru }),
    [date]
  );

  return (
    <StyledDatePickerHeaderWrapper>
      <IconButton variant="text" onClick={decreaseMonth}>
        <PreviousOutlineMd />
      </IconButton>
      <StyledDate variant="h6">{localizedDate}</StyledDate>
      <IconButton variant="text" onClick={increaseMonth}>
        <NextOutlineMd />
      </IconButton>
    </StyledDatePickerHeaderWrapper>
  );
};
