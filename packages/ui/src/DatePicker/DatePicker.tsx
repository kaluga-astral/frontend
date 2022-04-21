import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import { TextField } from '../TextField';

import { StyledDatePickerWrapper } from './styled';
import { DatePickerProps } from './types';
import { DatePickerHeader } from './DatePickerHeader';
import { DatePickerDay } from './DatePickerDay';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const { helperText } = props;

    return (
      <StyledDatePickerWrapper>
        <ReactDatePicker
          {...props}
          locale={ru}
          dateFormat="dd.MM.yyyy"
          renderCustomHeader={(renderProps) => (
            <DatePickerHeader {...renderProps} />
          )}
          renderDayContents={(dayOfMonth: number) => (
            <DatePickerDay dayOfMonth={dayOfMonth} />
          )}
          customInput={<TextField inputRef={ref} helperText={helperText} />}
        />
      </StyledDatePickerWrapper>
    );
  }
);

export default DatePicker;
