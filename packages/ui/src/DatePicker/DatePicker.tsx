import { forwardRef, useState } from 'react';
import { DatePickerProps, DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ ...props }, ref) => {
    const [value] = useState<Date | null>(new Date());

    return (
      <MuiDatePicker
        {...props}
        ref={ref}
        value={value}
        components={{ OpenPickerIcon: CalendarOutlineMd }}
      />
    );
  }
);

export default DatePicker;
