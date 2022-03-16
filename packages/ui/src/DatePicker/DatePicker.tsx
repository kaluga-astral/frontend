import { forwardRef } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';
import { TextField } from '@mui/material';

import { useTheme } from '../theme';
import type { Theme } from '../theme';

import { DatePickerProps } from './types';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value = new Date(), ...props }, ref) => {
    const theme: Theme = useTheme();

    return (
      <MuiDatePicker
        {...props}
        ref={ref}
        value={value}
        PaperProps={{
          style: {
            marginTop: theme.spacing(2),
            boxShadow: theme.elevation[200],
          },
        }}
        renderInput={(params) => <TextField {...params} />}
        components={{ OpenPickerIcon: CalendarOutlineMd }}
      />
    );
  }
);

export default DatePicker;
