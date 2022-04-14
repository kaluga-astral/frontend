import { useCallback } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import { CalendarOutlineMd } from '@astral/icons';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

import { TextField, TextFieldProps } from '../TextField';

import { DatePickerProps } from './types';

const componentsProps = {
  switchViewButton: {
    sx: {
      padding: 1,
      borderRadius: 1,
    },
  },
  leftArrowButton: {
    sx: {
      padding: 1,
      borderRadius: 1,
    },
  },
  rightArrowButton: {
    sx: {
      padding: 1,
      borderRadius: 1,
    },
  },
};

export const DatePicker = (props: DatePickerProps) => {
  const { value = new Date(), mask = '__.__.____', ...restProps } = props;

  const renderInput = useCallback((params: MuiTextFieldProps) => {
    const textFieldParams = params as TextFieldProps;

    return <TextField {...textFieldParams} />;
  }, []);

  return (
    <MuiDatePicker
      {...restProps}
      value={value}
      mask={mask}
      showDaysOutsideCurrentMonth
      renderInput={renderInput}
      components={{ OpenPickerIcon: CalendarOutlineMd }}
      componentsProps={componentsProps}
      OpenPickerButtonProps={{
        sx: {
          borderRadius: 1,
        },
      }}
      PaperProps={{
        sx: {
          marginTop: 2,
          boxShadow: (theme) => theme.elevation[200],
        },
      }}
      PopperProps={{
        placement: 'bottom-start',
      }}
    />
  );
};

export default DatePicker;
