import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = Omit<
  ReactDatePickerProps,
  | 'renderCustomHeader'
  | 'locale'
  | 'dateFormat'
  | 'renderCustomHeader'
  | 'renderDayContents'
  | 'customInput'
  | 'selected'
  | 'value'
  | 'placeholderText'
> & {
  helperText?: string;
  label?: string;
  error?: boolean;
  placeholder?: string;
  value: Date | null;
};

export type DatePickerValue = Date;
