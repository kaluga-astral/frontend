import * as React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePickerProps, DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';

import { localeMap, maskMap } from './constants';

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  ({ ...props }, ref) => {
    const [locale] = React.useState<keyof typeof maskMap>('ru');
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={localeMap[locale]}
      >
        <MuiDatePicker
          {...props}
          ref={ref}
          mask={maskMap[locale]}
          value={value}
          //@ts-ignore
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <CalendarOutlineMd />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </LocalizationProvider>
    );
  }
);

export default DatePicker;
