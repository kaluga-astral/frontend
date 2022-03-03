import React from 'react';
import { TextField } from '@mui/material';
import { DatePickerProps, DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({ ...props }, ref) => {
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
      <MuiDatePicker
        {...props}
        ref={ref}
        value={value}
        //@ts-ignore
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        components={{ OpenPickerIcon: CalendarOutlineMd }}
      />
    );
  }
);

export default DatePicker;
