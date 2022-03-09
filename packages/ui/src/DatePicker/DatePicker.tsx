import { forwardRef, useState } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';
import { TextField } from '@mui/material';

import { DatePickerProps } from './types';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ ...props }, ref) => {
    const [value] = useState<Date | null>(new Date());

    return (
      <MuiDatePicker
        {...props}
        ref={ref}
        value={value}
        renderInput={(params) => <TextField {...params} />}
        components={{ OpenPickerIcon: CalendarOutlineMd }}
      />
    );
  }
);

export default DatePicker;
