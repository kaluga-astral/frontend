import { useMemo } from 'react';
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { NextOutlineMd, PreviousOutlineMd } from '@astral/icons';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import { Button } from '../../Button';
import { IconButton } from '../../IconButton';

import { StyledDatePickerHeaderWrapper } from './styled';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const DatePickerHeader = (props: ReactDatePickerCustomHeaderProps) => {
  const { increaseMonth, decreaseMonth, date } = props;
  const localizedDate = useMemo(() => {
    const formattedDate = format(date, 'LLLL yyy', { locale: ru });

    return capitalizeFirstLetter(formattedDate);
  }, [date]);

  return (
    <StyledDatePickerHeaderWrapper>
      <IconButton variant="text" onClick={decreaseMonth}>
        <PreviousOutlineMd />
      </IconButton>
      <Button variant="text">{localizedDate}</Button>
      <IconButton variant="text" onClick={increaseMonth}>
        <NextOutlineMd />
      </IconButton>
    </StyledDatePickerHeaderWrapper>
  );
};
