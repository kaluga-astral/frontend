import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = Omit<
  ReactDatePickerProps,
  'renderCustomHeader' | 'locale'
> & { helperText?: string };

export type DatePickerValue = Date;
