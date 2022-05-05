import { ReactDatePickerProps } from 'react-datepicker';

import { TextFieldProps } from '../TextField';

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
  inputProps?: TextFieldProps;
  value: Date | null;
};

export type DatePickerValue = Date;
