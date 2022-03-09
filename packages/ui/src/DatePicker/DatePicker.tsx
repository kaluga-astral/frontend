import { forwardRef, useState } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';
import { TextField } from '@mui/material';

import { useTheme } from '../theme';
import type { Theme } from '../theme/baseTheme';

import { DatePickerProps } from './types';

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ ...props }, ref) => {
    const [value] = useState<Date | null>(new Date());
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
