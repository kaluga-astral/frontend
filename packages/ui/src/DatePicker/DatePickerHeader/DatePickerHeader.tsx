import { useContext, useMemo } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { NextOutlineMd, PreviousOutlineMd } from '@astral/icons';
import format from 'date-fns/format';

import { IconButton } from '../../IconButton';
import { DatePickerContext } from '../../DatePickerProvider';

import { DatePickerHeaderTitle, DatePickerHeaderWrapper } from './styled';

export const DatePickerHeader = (props: ReactDatePickerCustomHeaderProps) => {
  const { increaseMonth, decreaseMonth, date } = props;
  const { locale } = useContext(DatePickerContext);
  const localizedDate = useMemo(
    () => format(date, 'LLLL yyy', { locale }),
    [date],
  );

  return (
    <DatePickerHeaderWrapper>
      <IconButton variant="text" onClick={decreaseMonth}>
        <PreviousOutlineMd />
      </IconButton>
      <DatePickerHeaderTitle variant="h6">
        {localizedDate}
      </DatePickerHeaderTitle>
      <IconButton variant="text" onClick={increaseMonth}>
        <NextOutlineMd />
      </IconButton>
    </DatePickerHeaderWrapper>
  );
};
